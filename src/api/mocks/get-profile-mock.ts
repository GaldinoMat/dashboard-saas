import { http, HttpResponse } from 'msw'

import { GetProfileResp } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResp>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123456789',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
