import { Button } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { type recipients } from '#src/data.json'

type Recipient = (typeof recipients)[number]

export function RecipientEditor({
	recipient,
}: {
	recipient?: Pick<Recipient, 'name' | 'phone' | 'schedule'>
}) {
	// Parse phone number into country code and number if recipient exists
	const { countryCode, phoneNumber } = recipient?.phone
		? parsePhoneNumber(recipient.phone)
		: { countryCode: '', phoneNumber: '' }

	// Convert schedule day to lowercase for select value
	const scheduleDay = recipient?.schedule?.day.toLowerCase() ?? ''

	// Convert time format from "10 AM GMT+2" to "10:00" format
	const scheduleTime = recipient?.schedule?.time
		? convertTo24Hour(recipient.schedule.time)
		: ''

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
						defaultValue={countryCode}
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
						defaultValue={phoneNumber}
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
					defaultValue="GMT+2"
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
						defaultValue={scheduleDay}
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
						defaultValue={scheduleTime}
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
				<Icon name="Info">
					<p>Your messages will arrive every week at this day and time</p>
				</Icon>
			</div>

			<Button type="submit" status="success">
				<Icon name="Plus">Save Recipient</Icon>
			</Button>
		</form>
	)
}

function parsePhoneNumber(phone: string) {
	// Simple parsing - assumes format like "(555) 123-4567"
	const match = phone.match(/^\((\d{3})\) (\d{3})-(\d{4})$/)
	if (!match) return { countryCode: '+1', phoneNumber: phone }
	return {
		countryCode: '+1', // Default to US
		phoneNumber: `${match[2]}${match[3]}`,
	}
}

function convertTo24Hour(time: string) {
	// Convert "10 AM GMT+2" to "10:00"
	const match = time.match(/(\d{1,2}) (AM|PM)/)
	if (!match) return ''
	let hour = parseInt(match[1])
	const meridiem = match[2]

	if (meridiem === 'PM' && hour !== 12) hour += 12
	if (meridiem === 'AM' && hour === 12) hour = 0

	return `${hour.toString().padStart(2, '0')}:00`
}
