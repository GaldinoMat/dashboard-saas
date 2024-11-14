import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { queryClient } from '../../lib/react-query'
import SignIn from './sign-in'

describe('SignIn', () => {
  it('set default email input value if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={['/sign-in?email=john-doe@example.com']}
            >
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const label = wrapper.getByLabelText('Your e-mail') as HTMLInputElement

    expect(label.value).toEqual('john-doe@example.com')
  })
})
