/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { Error }         from '../error.component'

describe('identity', () => {
  describe('error', () => {
    describe('error.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <IntlProvider locale='ru' messages={{}}>
            <ThemeProvider>
              <Error />
            </ThemeProvider>
          </IntlProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
