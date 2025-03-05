import CronExpressionParser from 'cron-parser'
import { useParams, useRouteError } from 'react-router'
import { Button, ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.json'

const DAY_NAMES = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

export function RecipientRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) throw new Error(`Recipient with ID of "${id}" not found`)

	const schedule = recipient?.schedule
		? CronExpressionParser.parse(recipient.schedule.cron, {
				tz: recipient.timeZone,
			})
		: null
	const next = schedule?.next()
	const dayOfWeek = next?.getDay() ?? 0

	return (
		<div className="flex min-h-0 flex-grow flex-col">
			{/* Left sidebar (header on mobile) */}
			<div className="border-border flex-shrink-0 border-b p-4">
				<div className="flex items-center justify-between md:mb-3">
					<h2 className="text-2xl font-bold md:text-3xl">{recipient.name}</h2>

					<ButtonLink to={`/recipients/${id}/edit`} icon variant="borderless">
						<Icon name="Pencil" size="lg" />
					</ButtonLink>
				</div>

				<div className="mt-4 flex justify-between gap-4">
					<div className="flex items-center gap-2">
						<Icon name="Phone">
							<span className="font-mono">
								{recipient.countryCode} {recipient.phone}
							</span>
						</Icon>
					</div>

					<div className="flex items-center gap-2">
						<Icon name="Clock">
							<span>
								{recipient.schedule ? (
									`Every ${DAY_NAMES[dayOfWeek]} at ${next?.getHours()}:${next?.getMinutes()?.toString().padStart(2, '0')}`
								) : (
									<span className="text-foreground-alt">Schedule paused</span>
								)}
							</span>
						</Icon>
					</div>
				</div>
			</div>

			<div className="flex min-h-0 flex-1 flex-col">
				<div className="flex flex-grow flex-col gap-4 overflow-y-auto p-4 md:p-6">
					{recipient.messages.map((message) => (
						<div
							key={message.id}
							className={`rounded-lg p-4 ${
								message.status === 'sent'
									? 'bg-success-background text-success-foreground'
									: 'bg-info-background text-info-foreground'
							}`}
						>
							<div className="mb-2 flex items-center justify-between">
								<div className="flex flex-1 items-center gap-2">
									{message.status === 'sent' ? (
										<Icon name="Check">
											<span className="text-sm opacity-80 md:text-base">
												Sent on{' '}
												{message.sentAt
													? new Date(message.sentAt).toLocaleDateString(
															'en-US',
															{
																weekday: 'short',
																month: 'short',
																day: 'numeric',
																year: 'numeric',
															},
														)
													: 'Unknown date'}
											</span>
										</Icon>
									) : (
										<Icon name="Clock">
											<span className="text-sm opacity-80 md:text-base">
												Scheduled for{' '}
												{message.scheduledFor
													? new Date(message.scheduledFor).toLocaleDateString(
															'en-US',
															{
																weekday: 'short',
																month: 'short',
																day: 'numeric',
																year: 'numeric',
															},
														)
													: 'Unknown date'}
											</span>
										</Icon>
									)}
								</div>
								<Button
									icon
									variant="borderless"
									className={
										message.status === 'sent'
											? 'text-info-foreground'
											: 'text-success-foreground'
									}
								>
									<Icon name="DotsVertical" />
								</Button>
							</div>
							{/* break-words does not work for long strings of unbroken text */}
							<p className="text-sm [word-break:break-word] whitespace-pre-line md:text-base">
								{message.text}
							</p>
						</div>
					))}
				</div>

				<div className="border-border flex-shrink-0 border-t p-4">
					<form
						onSubmit={(e) => {
							e.preventDefault()
							e.currentTarget.reset()
						}}
						className="flex items-center gap-4"
					>
						<textarea
							placeholder="Type your message..."
							className="text-foreground-alt placeholder:text-foreground-alt/60 field-sizing-content max-h-[200px] min-h-[48px] flex-1 resize-none rounded-lg px-4 py-3"
							rows={1}
						/>
						<Button type="submit" className="hidden whitespace-nowrap md:block">
							Add to Queue
						</Button>
						<Button type="submit" className="block md:hidden" icon>
							<Icon name="Plus" />
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export function RecipientErrorBoundary() {
	const error = useRouteError()

	return (
		<div className="container mx-auto mt-4 flex flex-col gap-8 px-8">
			<div className="bg-danger-background rounded-sm p-4">
				<p className="text-danger-foreground">
					{error instanceof Error ? error.message : 'Unknown error'}
				</p>
			</div>
		</div>
	)
}
