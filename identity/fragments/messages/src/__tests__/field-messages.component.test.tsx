/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'

import { FieldMessages } from '../field-messages.component'

describe('identity', () => {
  describe('messages', () => {
    describe('field-messages.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <ThemeProvider>
            <FieldMessages />
          </ThemeProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
