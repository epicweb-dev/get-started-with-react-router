import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { type recipients } from '#src/data.ts'

type Recipient = (typeof recipients)[number]

export function RecipientEditor({
	recipient,
}: {
	recipient?: Pick<
		Recipient,
		| 'name'
		| 'id'
		| 'phone'
		| 'schedule'
		| 'countryCode'
		| 'timeZone'
		| 'nextScheduledAt'
	>
}) {
	return (
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
					defaultValue={recipient?.name}
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
						defaultValue={recipient?.countryCode}
					>
						<option value="">Select Country</option>
						<option value="+1">United States (+1)</option>
						<option value="+44">United Kingdom (+44)</option>
						<option value="+81">Japan (+81)</option>
						{/* Add more country codes as needed */}
					</select>
				</div>

				<div>
					<label htmlFor="phone" className="mb-2 block">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="123 456 7890"
						className="w-full rounded-lg border p-3"
						required
						defaultValue={recipient?.phone}
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
					defaultValue={recipient?.timeZone}
				>
					<option value="">Select Time Zone</option>
					<option value="America/New_York">America/New_York</option>
					<option value="America/Chicago">America/Chicago</option>
					<option value="America/Denver">America/Denver</option>
					<option value="America/Los_Angeles">America/Los_Angeles</option>
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
						defaultValue={recipient?.nextScheduledAt?.getDay()}
					>
						<option value="">Select Day</option>
						<option value="1">Monday</option>
						<option value="2">Tuesday</option>
						<option value="3">Wednesday</option>
						<option value="4">Thursday</option>
						<option value="5">Friday</option>
						<option value="6">Saturday</option>
						<option value="0">Sunday</option>
					</select>
					<div className="flex items-center gap-1">
						<input
							type="number"
							name="scheduleHour"
							className="w-full rounded-lg border p-3"
							required
							placeholder="HH"
							min={0}
							max={23}
							defaultValue={recipient?.nextScheduledAt
								?.getHours()
								.toString()
								.padStart(2, '0')}
						/>

						<span className="text-lg">:</span>

						<input
							type="number"
							name="scheduleMinute"
							className="w-full rounded-lg border p-3"
							required
							placeholder="MM"
							min={0}
							max={59}
							defaultValue={recipient?.nextScheduledAt
								?.getMinutes()
								.toString()
								.padStart(2, '0')}
						/>
					</div>
				</div>
			</div>

			<div className="mt-2 flex items-center gap-2">
				<Icon name="Info">
					<p>Your messages will arrive every week at this day and time</p>
				</Icon>
			</div>

			<div className="flex flex-col items-center gap-2 md:flex-row">
				<Button type="submit" status="success" className="w-full">
					<Icon name="Check">Save Recipient</Icon>
				</Button>
			</div>
		</form>
	)
}
