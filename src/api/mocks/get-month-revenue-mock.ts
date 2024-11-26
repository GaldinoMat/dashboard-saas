import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    receipt: 2000000,
    diffFromLastMonth: 70,
  })
})
