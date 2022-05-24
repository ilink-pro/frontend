/**
 * @jest-environment jsdom
 */

import { render }          from '@testing-library/react'

import React               from 'react'

import { ThemeProvider }   from '@ui/theme'

import { GeneralMessages } from '../general-messages.component'

describe('identity', () => {
  describe('messages', () => {
    describe('general-messages.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <ThemeProvider>
            <GeneralMessages />
          </ThemeProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
