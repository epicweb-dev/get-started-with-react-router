import { useParams, Link } from 'react-router'
import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

type Message = {
	id: string
	text: string
} & (
	| {
			status: 'sent'
			sentAt: string
	  }
	| {
			status: 'scheduled'
			scheduledFor: string
	  }
)

type Recipient = {
	id: string
	name: string
	phone: string
	schedule: { day: string; time: string } | null
	messages: Array<Message>
}

const recipients: Array<Recipient> = [
	{
		id: '1',
		name: 'Vojta',
		phone: '+ 420 606 754 513',
		schedule: { day: 'Thu', time: '10 AM GMT+2' },
		messages: [
			{
				id: '1',
				text: 'Thank you for being my partner in every adventure and my comfort in every storm. I love you more than you know.',
				sentAt: '2024-06-06T10:00:00Z',
				status: 'sent',
			},
			{
				id: '2',
				text: 'You are my best friend, my confidant, and my greatest support. Thank you for being you.',
				sentAt: '2024-06-13T10:00:00Z',
				status: 'sent',
			},
			{
				id: '3',
				text: 'Thank you for all the sacrifices you make for our family. Your hard work and dedication mean the world to me.',
				scheduledFor: '2024-06-20T10:00:00Z',
				status: 'scheduled',
			},
			{
				id: '4',
				text: 'Thank you for being my rock and always supporting me. I am grateful for your unwavering love.',
				scheduledFor: '2024-06-27T10:00:00Z',
				status: 'scheduled',
			},
		],
	},
	{
		id: '2',
		name: 'Mom',
		phone: '+ 420 777 131 355',
		schedule: { day: 'Wed', time: '10 AM GMT+2' },
		messages: [
			{
				id: '1',
				text: "Happy Mother's Day! Thank you for all the love, guidance, and support you've given me throughout my life.",
				sentAt: '2024-05-12T10:00:00Z',
				status: 'sent',
			},
			{
				id: '2',
				text: "Just wanted to let you know I'm thinking of you and I love you. Your strength and wisdom inspire me every day.",
				scheduledFor: '2024-06-19T10:00:00Z',
				status: 'scheduled',
			},
		],
	},
	{
		id: '3',
		name: 'Dad',
		phone: '+ 420 773 213 133',
		schedule: null,
		messages: [
			{
				id: '1',
				text: "Happy Father's Day! Thank you for being the best role model and for always believing in me.",
				sentAt: '2024-06-16T10:00:00Z',
				status: 'sent',
			},
			{
				id: '2',
				text: "I really appreciate all the life lessons you've taught me. You've shaped who I am today.",
				sentAt: '2024-06-17T10:00:00Z',
				status: 'sent',
			},
			{
				id: '3',
				text: 'Looking forward to our fishing trip next month. Those moments mean the world to me.',
				scheduledFor: '2024-07-01T10:00:00Z',
				status: 'scheduled',
			},
		],
	},
	{
		id: '4',
		name: 'Sarah',
		phone: '+ 420 608 442 789',
		schedule: { day: 'Mon', time: '9 AM GMT+2' },
		messages: [
			{
				id: '1',
				text: 'Happy birthday to my amazing sister! Wishing you all the joy and success in the world.',
				sentAt: '2024-05-20T09:00:00Z',
				status: 'sent',
			},
			{
				id: '2',
				text: "Can't wait for our weekend getaway! It's going to be so much fun catching up.",
				scheduledFor: '2024-06-21T09:00:00Z',
				status: 'scheduled',
			},
		],
	},
	{
		id: '5',
		name: 'Grandma Eva',
		phone: '+ 420 776 554 321',
		schedule: { day: 'Sun', time: '11 AM GMT+2' },
		messages: [
			{
				id: '1',
				text: "Thank you for all your wonderful stories and the delicious recipes you've shared with me. They keep our family traditions alive.",
				sentAt: '2024-06-02T11:00:00Z',
				status: 'sent',
			},
			{
				id: '2',
				text: 'Looking forward to Sunday lunch together. Your cooking always makes everything better.',
				scheduledFor: '2024-06-23T11:00:00Z',
				status: 'scheduled',
			},
		],
	},
]

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
												{new Date(message.sentAt).toLocaleDateString('en-US', {
													weekday: 'short',
													month: 'short',
													day: 'numeric',
													year: 'numeric',
												})}
											</span>
										</Icon>
									) : (
										<Icon name="Clock">
											<span className="text-sm opacity-80 md:text-base">
												Scheduled for{' '}
												{new Date(message.scheduledFor).toLocaleDateString(
													'en-US',
													{
														weekday: 'short',
														month: 'short',
														day: 'numeric',
														year: 'numeric',
													},
												)}
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
