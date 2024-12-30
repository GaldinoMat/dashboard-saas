import { expect, test } from '@playwright/test'

test('navigate to sign up page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Business name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone number').fill('12345678910')

  await page.getByRole('button', { name: 'Sign Up' }).click()

  const toast = page.getByText('Business registered successfully')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Business name').fill('Invalid Name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone number').fill('12345678910')

  await page.getByRole('button', { name: 'Sign Up' }).click()

  const toast = page.getByText('Error while registering restaurant')

  await expect(toast).toBeVisible()
})
