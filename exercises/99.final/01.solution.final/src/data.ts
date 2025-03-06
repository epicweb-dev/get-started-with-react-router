import CronExpressionParser from 'cron-parser'
import * as rawData from '#src/data.json'

export const recipients = rawData.recipients.map((recipient) => {
	const cronInstancePast = recipient.schedule?.cron
		? CronExpressionParser.parse(recipient.schedule.cron, {
				tz: recipient.timeZone,
			})
		: null
	const cronInstanceFuture = recipient.schedule?.cron
		? CronExpressionParser.parse(recipient.schedule.cron, {
				tz: recipient.timeZone,
			})
		: null
	let next = cronInstanceFuture?.next()

	// make the mocked messages more realistic timing wise
	const processedMessages = recipient.messages.map((message) => {
		// If message doesn't have a sentAt, keep it as null
		if (!message.sentAt || !cronInstancePast) {
			const scheduledAt = next?.toDate()
			next = cronInstanceFuture?.next()
			return {
				...message,
				status: 'scheduled',
				sentAt: null,
				scheduledAt,
			}
		}
		const sentAt = cronInstancePast.prev().toDate()

		return {
			...message,
			sentAt,
			status: 'sent',
			scheduledAt: sentAt,
		}
	})

	// Sort messages: null values last, otherwise by sentAt date (oldest first)
	const sortedMessages = processedMessages.sort((a, b) => {
		if (a.sentAt === null && b.sentAt === null) return 0
		if (a.sentAt === null) return 1
		if (b.sentAt === null) return -1
		return a.sentAt.getTime() - b.sentAt.getTime()
	})

	return {
		...recipient,
		messages: sortedMessages,
		nextScheduledAt: next?.toDate(),
	}
})
