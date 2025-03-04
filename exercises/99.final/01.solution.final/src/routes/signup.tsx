import { Link } from 'react-router'
import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

export function SignupRoute() {
	return (
		<div className="flex min-h-screen flex-col gap-8">
			<div className="mx-auto mt-20 max-w-md flex-1">
				<div className="text-center">
					<h1 className="mb-4 font-serif text-4xl font-bold">
						Create and Nurture Lasting Bonds
					</h1>
					<p className="mb-8">
						Please enter your phone number along with your country code
					</p>
				</div>

				<div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="flex flex-col gap-4">
							<div>
								<label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
									Country Code
								</label>
								<select
									className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
									defaultValue=""
								>
									<option value="" disabled>
										Select Country
									</option>
									<option value="+1">United States (+1)</option>
									<option value="+44">United Kingdom (+44)</option>
									<option value="+91">India (+91)</option>
								</select>
							</div>

							<div>
								<label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
									Phone Number
								</label>
								<input
									type="tel"
									placeholder="123 456 7890"
									className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
								/>
							</div>

							<Button
								type="submit"
								className="flex w-full items-center justify-center gap-2"
								status="success"
							>
								<span>Continue</span>
								<Icon name="ArrowRight" size="md" />
							</Button>
						</div>
					</form>
				</div>
			</div>
			<div className="py-8 text-center">
				<Link
					to="/"
					className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					gratitext
				</Link>
			</div>
		</div>
	)
}
