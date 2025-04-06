import { ButtonLink } from '#app/components/button.tsx'
import { Icon } from '#app/components/icon.tsx'
import { recipients } from '#app/data.ts'

export function RecipientIndexRoute() {
	return (
		<div className="container mx-auto flex flex-col items-center justify-center p-8">
			{recipients.length > 0 ? (
				<>
					<h2 className="mb-4 text-2xl font-bold">Select a Recipient</h2>
					<p className="mb-8 text-center opacity-80">
						Choose a recipient from your list to view their messages and
						schedule
					</p>
				</>
			) : (
				<>
					<div className="mb-8 text-center">
						<h2 className="mb-2 text-2xl font-bold">No Recipients Yet</h2>
						<p className="text-foreground-alt">
							Add your first recipient to start sending messages
						</p>
					</div>
					<ButtonLink to="new" className="flex items-center gap-2">
						<Icon name="Plus">Add Your First Recipient</Icon>
					</ButtonLink>
				</>
			)}
		</div>
	)
}
