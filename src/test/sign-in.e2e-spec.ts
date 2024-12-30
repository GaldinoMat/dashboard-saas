import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('We sent an auth link to your e-mail')

  await expect(toast).toBeVisible()
})

test('sign with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@example.com')

  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('Invalid credentials')

  await expect(toast).toBeVisible()
})

test('navigate to new retaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New members' }).click()

  expect(page.url()).toContain('/sign-up')
})
