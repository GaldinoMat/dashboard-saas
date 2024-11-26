import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      amount: 632,
      product: 'Pizza',
    },
    {
      amount: 150,
      product: 'Hawaiian Pizza',
    },
    {
      amount: 74,
      product: 'Soda',
    },
  ])
})
