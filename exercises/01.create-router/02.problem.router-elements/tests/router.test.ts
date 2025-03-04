import { test, expect } from '@playwright/test'

test('Hello World! should be rendered', async ({ page }) => {
	await page.goto('/')

	const helloWorld = page.getByText('Hello World!')
	await expect(helloWorld).toBeVisible({ timeout: 500 })
})
