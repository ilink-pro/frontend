/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'

import { Messages }      from '../messages.component'

describe('identity', () => {
  describe('messages', () => {
    describe('messages.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Messages />
          </ThemeProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
