import { useParams } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.ts'
import { RecipientEditor } from './recipient-editor.tsx'

export function RecipientEditRoute() {
	const { id } = useParams()
	const recipient = recipients.find((r) => r.id === id)

	if (!recipient) throw new Error(`Recipient with ID of "${id}" not found`)

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
