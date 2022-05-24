/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { AuthLayout }    from '../auth-layout.component'

describe('identity', () => {
  describe('auth-layout', () => {
    describe('auth-layout.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <IntlProvider locale='ru' messages={{}}>
            <ThemeProvider>
              <AuthLayout title='title' />
            </ThemeProvider>
          </IntlProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
