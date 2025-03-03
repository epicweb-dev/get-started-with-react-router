import { Link } from 'react-router'

const recipients = [
	{ id: '1', name: 'John Doe' },
	{ id: '2', name: 'Jane Smith' },
	{ id: '3', name: 'Bob Johnson' },
]

export function RecipientsRoute() {
	return (
		<div className="recipients">
			<h1 className="mb-4 text-3xl font-bold">Recipients</h1>
			<ul className="flex flex-col gap-2">
				{recipients.map((recipient) => (
					<li key={recipient.id}>
						<Link to={`/recipients/${recipient.id}`}>{recipient.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
