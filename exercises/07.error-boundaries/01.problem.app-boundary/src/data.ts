import CronExpressionParser from 'cron-parser'
import * as rawData from '#src/data.json'

export const recipients = rawData.recipients.map((recipient) => {
	// the fallback is just to calculate previous messages in the event
	// the schedule is paused
	const scheduleCron = recipient.schedule?.cron ?? '0 15 * * 3'
	const cronInstancePast = scheduleCron
		? CronExpressionParser.parse(scheduleCron, {
				tz: recipient.timeZone,
			})
		: null

	// don't use the fallback because we shouldn't have a cron for future messages
	const cronInstanceFuture = recipient.schedule?.cron
		? CronExpressionParser.parse(recipient.schedule.cron, {
				tz: recipient.timeZone,
			})
		: null
	let next = cronInstanceFuture?.next()

	// make the mocked messages more realistic timing wise
	const pastMessages = recipient.messages
		.filter((m) => m.sentAt && cronInstancePast)
		.map((message) => {
			if (!cronInstancePast) throw new Error('cronInstancePast is null')

			const sentAt = cronInstancePast?.prev().toDate()

			return {
				...message,
				sentAt,
				status: 'sent',
				scheduledAt: sentAt,
			}
		})

	const futureMessages = recipient.messages
		.filter((m) => !m.sentAt || !cronInstancePast)
		.reverse()
		.map((message) => {
			const scheduledAt = next?.toDate()
			next = cronInstanceFuture?.next()
			return {
				...message,
				status: 'scheduled',
				sentAt: null,
				scheduledAt,
			}
		})

	const processedMessages = [...pastMessages, ...futureMessages]

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
