import { useParams, Link } from 'react-router'

const recipients = [
	{ id: '1', name: 'John Doe', email: 'john@example.com' },
	{ id: '2', name: 'Jane Smith', email: 'jane@example.com' },
	{ id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
]

export function RecipientRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) {
		return (
			<div className="p-4">
				<p className="text-red-600">Recipient not found</p>
				<Link to="/recipients" className="text-blue-600 hover:underline">
					Back to recipients
				</Link>
			</div>
		)
	}

	return (
		<div className="recipient p-4">
			<h1 className="mb-4 text-3xl font-bold">{recipient.name}</h1>
			<p className="mb-4 text-lg">Email: {recipient.email}</p>
			<Link to="/recipients" className="text-blue-600 hover:underline">
				Back to recipients
			</Link>
		</div>
	)
}
