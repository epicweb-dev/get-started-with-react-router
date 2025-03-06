// 🐨 import the useParams hook from react-router
import { recipients } from '#src/data.ts'
import { RecipientEditor } from './recipient-editor.tsx'

export function RecipientEditRoute() {
	// 🐨 use the useParams hook to get the id from the URL
	const id = 'TODO'
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) throw new Error(`Recipient not found with ID "${id}"`)

	return (
		<div className="w-full overflow-y-auto p-6">
			<div className="container mx-auto max-w-2xl">
				<h1 className="mb-2 text-center text-4xl font-bold">Edit Recipient</h1>
				<p className="mb-8 text-center">Edit the details of your recipient.</p>

				<RecipientEditor recipient={recipient} />
			</div>
		</div>
	)
}
