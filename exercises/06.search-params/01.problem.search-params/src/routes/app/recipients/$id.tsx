import { matchSorter } from 'match-sorter'
// 🐨 bring in useSearchParams from react-router
import { useParams } from 'react-router'
import { Button, ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.ts'

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
	// 🐨 get the searchParams from the useSearchParams hook

	// 🐨 set the searchQuery to the value of the searchParams's 'q' key
	const searchQuery = ''

	if (!recipient) {
		return (
			<div className="container mx-auto mt-4 flex flex-col gap-8 px-8">
				<div className="bg-danger-background rounded-sm p-4">
					<p className="text-danger-foreground">
						Recipient with ID of "{id}" not found
					</p>
				</div>
			</div>
		)
	}

	const filteredMessages = searchQuery
		? matchSorter(recipient.messages, searchQuery, {
				keys: ['content'],
			})
		: recipient.messages

	function handleSearch(_value: string) {
		// 🐨 set the searchParams's 'q' key to the value
		// 💯 if the value is empty, remove the 'q' key
	}

	return (
		<div className="flex min-h-0 flex-grow flex-col">
			<div className="border-border flex-shrink-0 border-b p-4">
				<div className="flex items-center justify-between md:mb-3">
					<h2 className="text-2xl font-bold md:text-3xl">{recipient.name}</h2>

					<ButtonLink to={`/recipients/${id}/edit`} icon variant="borderless">
						<Icon name="Pencil" size="lg" />
					</ButtonLink>
				</div>

				<div className="mt-4 flex flex-col gap-4">
					<div className="flex justify-between gap-4">
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
										`Every ${DAY_NAMES[recipient.nextScheduledAt?.getDay() ?? 0]} at ${recipient.nextScheduledAt?.getHours()}:${recipient.nextScheduledAt?.getMinutes()?.toString().padStart(2, '0')}`
									) : (
										<span className="text-foreground-alt">Schedule paused</span>
									)}
								</span>
							</Icon>
						</div>
					</div>

					<form
						action={(formData) => {
							const query = formData.get('q')
							handleSearch(query?.toString() ?? '')
						}}
						className="flex items-center gap-2"
					>
						<div className="relative flex-1">
							<input
								type="search"
								name="q"
								placeholder="Search messages..."
								className="text-foreground-alt placeholder:text-foreground-alt/60 h-10 w-full rounded-lg py-2 pr-12 pl-4"
								value={searchQuery}
								onChange={(e) => handleSearch(e.currentTarget.value)}
							/>
							<Button
								type="submit"
								icon
								variant="borderless"
								className="absolute top-1/2 right-2 -translate-y-1/2"
							>
								<Icon name="Search" title="Search messages" />
							</Button>
						</div>
					</form>
				</div>
			</div>

			<div className="flex min-h-0 flex-1 flex-col">
				<div
					className="flex flex-grow flex-col gap-4 overflow-y-auto p-4 md:p-6"
					// auto-scroll to the bottom on mount
					ref={(node) => {
						node?.scrollTo({ top: node.scrollHeight, behavior: 'auto' })
					}}
				>
					{filteredMessages.map((message) => {
						const status = message.sentAt ? 'sent' : 'scheduled'
						const nextScheduledTime =
							status === 'scheduled' ? message.scheduledAt : null
						return (
							<div
								key={message.id}
								className={`rounded-lg p-4 ${
									status === 'sent'
										? 'bg-success-background text-success-foreground'
										: 'bg-info-background text-info-foreground'
								}`}
							>
								<div className="mb-2 flex items-center justify-between">
									<div className="flex flex-1 items-center gap-2">
										{status === 'sent' ? (
											<Icon name="Check">
												<span className="text-sm opacity-80 md:text-base">
													Sent on{' '}
													{message.sentAt
														? message.sentAt.toLocaleDateString('en-US', {
																weekday: 'short',
																month: 'short',
																day: 'numeric',
																year: 'numeric',
															})
														: 'Unknown date'}
												</span>
											</Icon>
										) : (
											<Icon name="Clock">
												{nextScheduledTime ? (
													<span className="text-sm opacity-80 md:text-base">
														Scheduled for{' '}
														{nextScheduledTime.toLocaleDateString('en-US', {
															weekday: 'short',
															month: 'short',
															day: 'numeric',
															year: 'numeric',
														})}
													</span>
												) : (
													<span className="text-sm opacity-80 md:text-base">
														Schedule paused
													</span>
												)}
											</Icon>
										)}
									</div>
									<Button
										icon
										variant="borderless"
										className={
											status === 'sent'
												? 'text-info-foreground'
												: 'text-success-foreground'
										}
									>
										<Icon name="DotsVertical" />
									</Button>
								</div>
								{/* break-words does not work for long strings of unbroken text */}
								<p className="text-sm [word-break:break-word] whitespace-pre-line md:text-base">
									{message.content}
								</p>
							</div>
						)
					})}
				</div>

				<div className="border-border flex-shrink-0 border-t p-4">
					<form
						key={recipient.id}
						onSubmit={(e) => {
							e.preventDefault()
							e.currentTarget.reset()
						}}
						className="flex items-center gap-4"
					>
						<textarea
							autoFocus
							name="content"
							placeholder={`Type your message to ${recipient.name}...`}
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
