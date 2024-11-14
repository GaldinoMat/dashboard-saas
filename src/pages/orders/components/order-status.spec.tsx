import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import OrderStatus, { OrderStatusType } from './order-status'

const orderStatus: Record<OrderStatusType, { text: string; color: string }> = {
  pending: { text: 'pending', color: 'bg-slate-400' },
  canceled: { text: 'canceled', color: 'bg-rose-400' },
  processing: { text: 'processing', color: 'bg-amber-400' },
  delivering: { text: 'delivering', color: 'bg-amber-400' },
  delivered: { text: 'delivered', color: 'bg-emerald-500' },
}

describe('Order Status', () => {
  const orderArray = Object.entries(orderStatus)

  orderArray.map(([order, { text, color }]) =>
    it(`should display the right text based on order status (${order})`, () => {
      const wrapper = render(<OrderStatus status={order as OrderStatusType} />)

      const statusText = wrapper.getByText(text)
      const badgeElement = wrapper.getByTestId('badge')

      expect(statusText).toBeInTheDocument()
      expect(badgeElement).toHaveClass(color)

      wrapper.unmount()
    }),
  )
})
