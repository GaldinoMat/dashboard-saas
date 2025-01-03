import { setupWorker } from 'msw/browser'

import { env } from '../../env'
import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDaileyRevenueInPeriodAmountMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCancelledOrdersAmountMock } from './get-month-cancelled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateRestaurantMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCancelledOrdersAmountMock,
  getPopularProductsMock,
  getDaileyRevenueInPeriodAmountMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateRestaurantMock,
  getOrdersMock,
  getOderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  dispatchOrderMock,
  deliverOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
