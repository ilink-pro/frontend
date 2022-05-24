/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { Navigation }    from '../navigation.component'

describe('site', () => {
  describe('navigation', () => {
    describe('navigation.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <IntlProvider locale='ru' messages={{}}>
            <ThemeProvider>
              <Navigation />
            </ThemeProvider>
          </IntlProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
