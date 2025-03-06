import { test, expect } from '@playwright/test'

test('gratitext should be rendered', async ({ page }) => {
	await page.goto('/')

	const gratitext = page.getByRole('banner').getByText(/gratitext/i)
	await expect(gratitext).toBeVisible({ timeout: 500 })
})

test('About should be rendered', async ({ page }) => {
	await page.goto('/about')

	const about = page.getByRole('heading', { name: /about/i })
	await expect(about).toBeVisible({ timeout: 500 })
})

test('should navigate from Home to About page', async ({ page }) => {
	await page.goto('/')

	const aboutLink = page.getByRole('link', { name: /about/i })
	await aboutLink.click()

	const aboutHeading = page.getByRole('heading', { name: /about/i })
	await expect(aboutHeading).toBeVisible({ timeout: 500 })
})

test('should navigate from About to Home page', async ({ page }) => {
	await page.goto('/about')

	const homeLink = page
		.getByRole('contentinfo')
		.getByRole('link', { name: /gratitext/i })
	await homeLink.click()

	const gratitext = page.getByRole('heading', {
		level: 1,
		name: /Thoughtful Connections Made Simple/i,
	})
	await expect(gratitext).toBeVisible({ timeout: 500 })
})

test('should show recipient index page when no recipient is selected', async ({
	page,
}) => {
	await page.goto('/recipients')

	const heading = page.getByRole('heading', { name: /select.*recipient/i })
	await expect(heading).toBeVisible({ timeout: 500 })
})

test('should load specific recipient details', async ({ page }) => {
	await page.goto('/recipients')

	const summary = page.getByText(/select recipient/i)
	await summary.click()

	const bethanyLink = page.getByRole('link', { name: /bethany/i })
	await bethanyLink.click()

	const recipientName = page.getByRole('heading', { name: /bethany/i })
	await expect(recipientName).toBeVisible({ timeout: 500 })

	const phoneNumber = page.getByText(/\+\d+\s+\d{10}/)
	await expect(phoneNumber).toBeVisible({ timeout: 500 })
})

test('404 error boundary should be shown for non-existent recipient', async ({
	page,
}) => {
	await page.goto('/recipients/does-not-exist')

	const errorMessage = page.getByText(/recipient.*not found/i)
	await expect(errorMessage).toBeVisible({ timeout: 500 })
})
