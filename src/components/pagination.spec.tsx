import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Pagination from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    expect(wrapper.getByText('Page 1 out of 20')).toBeInTheDocument()
    expect(wrapper.getByText('200 item(s)')).toBeInTheDocument()

    wrapper.unmount()
  })

  it('should navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const button = wrapper.getByRole('button', {
      name: 'Next page',
    })

    await user.click(button)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)

    wrapper.unmount()
  })

  it('should navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const button = wrapper.getByRole('button', {
      name: 'Previous page',
    })

    await user.click(button)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(4)

    wrapper.unmount()
  })

  it('should navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const button = wrapper.getByRole('button', {
      name: 'First page',
    })

    await user.click(button)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(0)

    wrapper.unmount()
  })

  it('should navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const button = wrapper.getByRole('button', {
      name: 'Last page',
    })

    await user.click(button)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(19)

    wrapper.unmount()
  })
})
