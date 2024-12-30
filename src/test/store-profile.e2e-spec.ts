import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Business Profile' }).click()

  await page.getByLabel('Name').fill('My Pizza Shop')
  await page.getByLabel('Description').fill('Another description')

  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Profile updated successfully')

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(toast).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'My Pizza Shop' }),
  ).toBeVisible()
})
