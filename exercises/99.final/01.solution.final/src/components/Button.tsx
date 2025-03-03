import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router'

const buttonStyles = cva(
	'rounded-full px-6 py-2 font-medium no-underline transition-colors hover:no-underline focus:no-underline',
	{
		variants: {
			variant: {
				primary: [
					'bg-button text-button-text',
					'hover:bg-button-hover',
					'active:bg-button-active',
				],
				secondary: [
					'bg-button-secondary text-button-secondary-text',
					'hover:bg-button-secondary-hover',
					'active:bg-button-secondary-active',
				],
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	},
)

export function Button({
	variant,
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonStyles>) {
	return <button className={buttonStyles({ variant, className })} {...props} />
}

export function LinkButton({
	variant,
	className,
	...props
}: LinkProps & VariantProps<typeof buttonStyles>) {
	return <Link className={buttonStyles({ variant, className })} {...props} />
}
