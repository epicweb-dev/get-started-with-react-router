import { useParams } from 'react-router'
import { recipients } from '#src/data.json'
import { RecipientEditor } from './recipient-editor.tsx'

export function RecipientEditRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) throw new Error(`Recipient not found with ID "${id}"`)

	return (
		<div className="container mx-auto max-w-2xl overflow-y-auto p-6">
			<h1 className="mb-2 text-center text-4xl font-bold">Edit Recipient</h1>
			<p className="mb-8 text-center">Edit the details of your recipient.</p>

			<RecipientEditor recipient={recipient} />
		</div>
	)
}
