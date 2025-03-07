export type IconProps = React.SVGProps<SVGSVGElement> & {
	title?: string
}

export function ArrowLeftIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M15 19l-7-7 7-7"
			/>
		</svg>
	)
}

export function ArrowRightIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9 5l7 7-7 7"
			/>
		</svg>
	)
}

export function ArrowDownIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	)
}

export function PhoneIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>
	)
}

export function ClockIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	)
}

export function SettingsIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	)
}

export function CheckIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 13l4 4L19 7"
			/>
		</svg>
	)
}

export function DotsVerticalIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
			/>
		</svg>
	)
}

export function MessageIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z"
			/>
		</svg>
	)
}

export function PlusIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 4v16m8-8H4"
			/>
		</svg>
	)
}

export function InfoIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	)
}

export function PencilIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
			/>
		</svg>
	)
}

export function ExclamationCircleIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	)
}

export function SearchIcon({ title, ...props }: IconProps) {
	return (
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
			{title ? <title>{title}</title> : null}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	)
}
