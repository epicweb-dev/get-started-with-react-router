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
			<ul className="space-y-2">
				{recipients.map((recipient) => (
					<li key={recipient.id}>
						<Link
							to={`/recipients/${recipient.id}`}
							className="text-blue-600 hover:underline"
						>
							{recipient.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
