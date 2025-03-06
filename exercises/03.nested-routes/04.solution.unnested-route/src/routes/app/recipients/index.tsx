import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

export function RecipientIndexRoute() {
	return (
		<div className="container mx-auto flex flex-col items-center justify-center p-8">
			<div className="mb-8 text-center">
				<h2 className="mb-2 text-2xl font-bold">No Recipients Yet</h2>
				<p className="text-foreground-alt">
					Add your first recipient to start sending messages
				</p>
			</div>
			<ButtonLink to="new" className="flex items-center gap-2">
				<Icon name="Plus">Add Your First Recipient</Icon>
			</ButtonLink>
		</div>
	)
}
