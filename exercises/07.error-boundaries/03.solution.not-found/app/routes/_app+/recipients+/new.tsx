import { RecipientEditor } from './__recipient-editor.tsx'

export function NewRecipientRoute() {
	return (
		<div className="w-full overflow-y-auto p-4">
			<div className="container mx-auto max-w-2xl">
				<h1 className="mb-2 text-center text-4xl font-bold">
					Add New Recipient
				</h1>
				<p className="mb-8 text-center">Who should receive your messages?</p>

				<RecipientEditor />
			</div>
		</div>
	)
}
