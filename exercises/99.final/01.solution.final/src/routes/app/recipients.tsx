import { Link } from 'react-router'
import { Button, LinkButton } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

const recipients = [
	{
		id: '1',
		name: 'Vojta',
		phone: '+ 420 606 754 513',
		schedule: { day: 'Thu', time: '10 AM GMT+2' },
		messageCount: 2,
	},
	{
		id: '2',
		name: 'Mom',
		phone: '+ 420 777 131 355',
		schedule: { day: 'Wed', time: '10 AM GMT+2' },
		messageCount: 0,
	},
	{
		id: '3',
		name: 'Dad',
		phone: '+ 420 773 213 133',
		schedule: null,
		messageCount: 3,
	},
]

export function RecipientsRoute() {
	return (
		<div className="container mx-auto p-4 md:p-8">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="text-4xl font-bold">Recipients</h1>
				<LinkButton
					to="/recipients/new"
					className="hidden items-center gap-2 md:flex"
				>
					<Icon name="Plus">Add New Recipient</Icon>
				</LinkButton>
				<LinkButton icon to="/recipients/new" className="md:hidden">
					<Icon name="Plus" />
				</LinkButton>
			</div>

			{/* Table view (hidden on mobile) */}
			<div className="hidden md:block">
				<div className="bg-background-alt rounded-lg p-6">
					<table className="w-full table-fixed">
						<thead>
							<tr className="text-foreground-alt text-sm uppercase">
								<th className="w-[15%] pr-2 pb-4 text-left font-normal">
									Name
								</th>
								<th className="w-[33%] px-2 pb-4 text-left font-normal">
									Phone Number
								</th>
								<th className="w-[32%] px-2 pb-4 text-left font-normal">
									Schedule
								</th>
								<th className="w-[20%] pb-4 pl-2 text-right font-normal">
									Prepared Messages
								</th>
							</tr>
						</thead>
						<tbody className="divide-border divide-y">
							{recipients.map((recipient) => (
								<tr key={recipient.id} className="group">
									<td className="py-4 pr-2">
										<Link
											to={`/recipients/${recipient.id}`}
											className="text-lg font-medium hover:underline"
										>
											{recipient.name}
										</Link>
									</td>
									<td className="px-2 py-4 font-mono">{recipient.phone}</td>
									<td className="px-2 py-4">
										{recipient.schedule ? (
											<>
												Every {recipient.schedule.day} at{' '}
												{recipient.schedule.time}
											</>
										) : (
											<span className="text-foreground-alt">Paused</span>
										)}
									</td>
									<td className="py-4 pl-2 text-right">
										{recipient.messageCount} message
										{recipient.messageCount !== 1 ? 's' : ''}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Card view (shown only on mobile) */}
			<div className="flex flex-col gap-4 md:hidden">
				{recipients.map((recipient) => (
					<div
						key={recipient.id}
						className="bg-background-alt relative rounded-lg p-6"
					>
						<div className="mb-4 flex items-start justify-between">
							<Link
								to={`/recipients/${recipient.id}`}
								className="text-2xl font-medium hover:underline"
							>
								{recipient.name}
							</Link>
							<Button icon variant="borderless">
								<Icon name="DotsVertical" size="lg" />
							</Button>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-foreground-alt flex items-center gap-2">
								<Icon name="Clock">
									{recipient.schedule ? (
										<span>
											Every {recipient.schedule.day} at{' '}
											{recipient.schedule.time}
										</span>
									) : (
										<span className="text-foreground-alt">Paused</span>
									)}
								</Icon>
							</div>
							<div className="text-foreground-alt flex items-center gap-2">
								<Icon name="Message">
									<span>
										{recipient.messageCount} message
										{recipient.messageCount !== 1 ? 's' : ''} prepared
									</span>
								</Icon>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
