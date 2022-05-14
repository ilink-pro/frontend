import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider>
    <IntlProvider locale='en' defaultLocale='en' messages={{}}>
      <Component {...pageProps} {...props} />
    </IntlProvider>
  </ThemeProvider>
)

export default App
