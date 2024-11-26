import { setupWorker } from 'msw/browser'

import { env } from '../../env'
import { getDaileyRevenueInPeriodAmountMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCancelledOrdersAmountMock } from './get-month-cancelled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getMonthRevenueOrdersAmountMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sigin-in-mock'
import { updateRestaurantMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueOrdersAmountMock,
  getMonthCancelledOrdersAmountMock,
  getPopularProductsMock,
  getDaileyRevenueInPeriodAmountMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateRestaurantMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
