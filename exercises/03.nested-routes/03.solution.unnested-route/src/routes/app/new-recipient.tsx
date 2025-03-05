import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

export function NewRecipientRoute() {
	return (
		<div className="container mx-auto max-w-2xl p-6">
			<h1 className="mb-2 text-center text-4xl font-bold">Add New Recipient</h1>
			<p className="mb-8 text-center">Who should receive your messages?</p>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col gap-6 p-8"
			>
				<div>
					<label htmlFor="name" className="mb-2 block">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Recipient's Name"
						className="w-full rounded-lg border p-3"
						required
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="countryCode" className="mb-2 block">
							Country Code
						</label>
						<select
							id="countryCode"
							name="countryCode"
							className="w-full rounded-lg border p-3"
							required
						>
							<option value="">Select Country</option>
							<option value="+1">United States (+1)</option>
							<option value="+44">United Kingdom (+44)</option>
							<option value="+81">Japan (+81)</option>
							{/* Add more country codes as needed */}
						</select>
					</div>

					<div>
						<label htmlFor="phoneNumber" className="mb-2 block">
							Phone Number
						</label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="123 456 7890"
							className="w-full rounded-lg border p-3"
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor="timeZone" className="mb-2 block">
						Time Zone
					</label>
					<select
						id="timeZone"
						name="timeZone"
						className="w-full rounded-lg border p-3"
						required
					>
						<option value="">Select Time Zone</option>
						<option value="America/New_York">Eastern Time</option>
						<option value="America/Chicago">Central Time</option>
						<option value="America/Denver">Mountain Time</option>
						<option value="America/Los_Angeles">Pacific Time</option>
						{/* Add more time zones as needed */}
					</select>
				</div>

				<div>
					<label className="mb-2 block">Create a Schedule</label>
					<div className="grid grid-cols-2 gap-4">
						<select
							name="scheduleDay"
							className="w-full rounded-lg border p-3"
							required
						>
							<option value="">Select Day</option>
							<option value="monday">Monday</option>
							<option value="tuesday">Tuesday</option>
							<option value="wednesday">Wednesday</option>
							<option value="thursday">Thursday</option>
							<option value="friday">Friday</option>
							<option value="saturday">Saturday</option>
							<option value="sunday">Sunday</option>
						</select>

						<select
							name="scheduleTime"
							className="w-full rounded-lg border p-3"
							required
						>
							<option value="">Select Time</option>
							{Array.from({ length: 24 }, (_, i) => {
								const hour = i.toString().padStart(2, '0')
								return (
									<option key={hour} value={`${hour}:00`}>
										{`${hour}:00`}
									</option>
								)
							})}
						</select>
					</div>
				</div>

				<div className="mt-2 flex items-center gap-2">
					<Icon name="Info" size="xl">
						<p>Your messages will arrive every week at this day and time</p>
					</Icon>
				</div>

				<Button type="submit" status="success">
					<Icon name="Plus">Add New Recipient</Icon>
				</Button>
			</form>
		</div>
	)
}
