import { test, expect } from '@playwright/test'

test('gratitext should be rendered', async ({ page }) => {
	await page.goto('/')

	const gratitext = page.getByRole('banner').getByText(/gratitext/)
	await expect(gratitext).toBeVisible({ timeout: 500 })
})

test('About should be rendered', async ({ page }) => {
	await page.goto('/about')

	const about = page.getByRole('heading', { name: /about/i })
	await expect(about).toBeVisible({ timeout: 500 })
})
