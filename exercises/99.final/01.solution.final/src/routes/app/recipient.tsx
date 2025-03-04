import { useParams, Link } from 'react-router'
import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import data from '#src/data.json'

const recipients = data.recipients

export function RecipientRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) {
		return (
			<div className="container mx-auto mt-4 flex flex-col gap-8">
				<div className="bg-danger-background rounded-sm p-4">
					<p className="text-danger-foreground">Recipient not found</p>
				</div>
				<Link
					to="/recipients"
					className="text-link hover:text-link-hover block text-center hover:underline"
				>
					Back to recipients
				</Link>
			</div>
		)
	}

	return (
		<div className="flex min-h-0 flex-grow flex-col md:flex-row">
			{/* Left sidebar (header on mobile) */}
			<div className="border-border bg-background-alt flex-shrink-0 border-b p-4 md:w-80 md:border-r md:border-b-0 md:p-6">
				<div className="flex items-center justify-between md:block">
					<div>
						<Link
							to="/recipients"
							className="text-foreground-alt hover:text-foreground mb-2 flex items-center gap-2 md:mb-8"
						>
							<Icon name="ArrowLeft">
								<span className="md:inline">All Recipients</span>
							</Icon>
						</Link>

						<h1 className="text-2xl font-bold md:mb-6 md:text-3xl">
							{recipient.name}
						</h1>
					</div>

					<div className="flex items-center gap-4 md:mt-6 md:block md:gap-0">
						<Button icon variant="borderless" className="md:hidden">
							<Icon name="Settings" size="lg" />
						</Button>
					</div>
				</div>

				<div className="mt-4 hidden flex-col gap-4 md:flex">
					<div className="flex items-center gap-2">
						<Icon name="Phone">
							<span className="font-mono">{recipient.phone}</span>
						</Icon>
					</div>

					<div className="flex items-center gap-2">
						<Icon name="Clock">
							<span>
								{recipient.schedule ? (
									`Every ${recipient.schedule.day} at ${recipient.schedule.time}`
								) : (
									<span className="text-foreground-alt">Schedule paused</span>
								)}
							</span>
						</Icon>
					</div>

					<Button icon className="mt-2 hidden md:flex">
						<Icon name="Settings" />
					</Button>
				</div>
			</div>

			{/* Main content */}
			<div className="flex min-h-0 flex-1 flex-grow flex-col">
				{/* Messages */}
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
							<p className="text-sm break-all md:text-base">{message.text}</p>
						</div>
					))}
				</div>

				<div className="border-border bg-background flex-shrink-0 border-t p-4">
					<div className="flex items-center gap-4">
						<input
							type="text"
							placeholder="Type your message..."
							className="bg-background-alt text-foreground placeholder:text-foreground-alt flex-1 rounded-lg px-4 py-3"
						/>
						<Button className="hidden whitespace-nowrap md:block">
							Add to Queue
						</Button>
						<Button className="block md:hidden" icon>
							<Icon name="Plus" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
