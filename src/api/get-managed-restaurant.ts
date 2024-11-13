import { api } from '@/lib/axios'

export interface GetManagedRestaurantResp {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResp>(
    '/managed-restaurant',
  )

  return response.data
}
