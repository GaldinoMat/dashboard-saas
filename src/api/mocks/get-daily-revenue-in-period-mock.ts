import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue'

export const getDaileyRevenueInPeriodAmountMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 2000,
    },
    {
      date: '05/02/2024',
      receipt: 4000,
    },
    {
      date: '03/03/2024',
      receipt: 5000,
    },
  ])
})
