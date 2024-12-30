import { expect, test } from '@playwright/test'

test('display daily orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% relative to yesterday')).toBeVisible()
})

test('display monthly orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.getByText('+7% relative to last month')).toBeVisible()
})

test('display monthly cancelled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% relative to yesterday')).toBeVisible()
})

test('display monthly revenue amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('$200.00', { exact: true })).toBeVisible()
  await expect(page.getByText('+10% relative to last month')).toBeVisible()
})
