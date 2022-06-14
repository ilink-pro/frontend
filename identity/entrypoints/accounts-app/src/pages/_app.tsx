import { ApolloClient }   from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => {
  const client = new ApolloClient({
    uri: process.env.PRIVATE_GATEWAY_URL || 'https://private-gateway.torin-asakura.support/',
    cache: new InMemoryCache(),
  })

  return (
    <ThemeProvider>
      <IntlProvider locale='en' defaultLocale='en' messages={{}}>
        <ApolloProvider client={client}>
          <Component {...pageProps} {...props} />
        </ApolloProvider>
      </IntlProvider>
    </ThemeProvider>
  )
}
export default App
