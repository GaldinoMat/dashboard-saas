import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import NavLink from './nav-link'

describe('NavLink', () => {
  it('should highlight then nav link when current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')

    wrapper.unmount()
  })
})
