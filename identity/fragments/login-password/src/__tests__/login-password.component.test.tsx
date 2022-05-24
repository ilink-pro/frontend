/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { LoginPassword } from '../login-password.component'

describe('identity', () => {
  describe('login-password', () => {
    describe('login-password.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <IntlProvider locale='ru' messages={{}}>
            <ThemeProvider>
              <LoginPassword />
            </ThemeProvider>
          </IntlProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
