import { test, expect } from '@playwright/test'

test('Hello World! should be rendered', async ({ page }) => {
	await page.goto('/')

	const helloWorld = page.getByText(/hello world/i)
	await expect(helloWorld).toBeVisible({ timeout: 500 })
})

test('About should be rendered', async ({ page }) => {
	await page.goto('/about')

	const about = page.getByText(/about/i)
	await expect(about).toBeVisible({ timeout: 500 })
})
