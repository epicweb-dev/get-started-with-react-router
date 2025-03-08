import { useParams } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.ts'
import { RecipientEditor } from './recipient-editor.tsx'

export function RecipientEditRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) {
		// 🐨 Remove this and throw an error instead. It'll be handled by the error boundary
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

	return (
		<div className="w-full overflow-y-auto p-6">
			<div className="container mx-auto max-w-2xl">
				<div className="relative">
					<ButtonLink
						to=".."
						relative="path"
						icon
						variant="borderless"
						className="absolute top-0 right-0"
					>
						<Icon name="X" title="Close editor" />
					</ButtonLink>
					<h1 className="mb-2 text-center text-4xl font-bold">
						Edit Recipient
					</h1>
					<p className="mb-8 text-center">
						Edit the details of your recipient.
					</p>
				</div>

				<RecipientEditor recipient={recipient} />
			</div>
		</div>
	)
}
