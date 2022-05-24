/**
 * @jest-environment jsdom
 */

import { render }               from '@testing-library/react'

import React                    from 'react'
import { IntlProvider }         from 'react-intl'

import { ThemeProvider }        from '@ui/theme'

import { RegistrationPassword } from '../registration-password.component'

describe('identity', () => {
  describe('registration-password', () => {
    describe('registration-password.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <IntlProvider locale='ru' messages={{}}>
            <ThemeProvider>
              <RegistrationPassword />
            </ThemeProvider>
          </IntlProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
