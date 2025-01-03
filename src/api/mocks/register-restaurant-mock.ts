import { http, HttpResponse } from 'msw'

import { RegisterRestaurant } from '../register-restaurant'

export const registerRestaurantMock = http.post<never, RegisterRestaurant>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    console.log(restaurantName)

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
