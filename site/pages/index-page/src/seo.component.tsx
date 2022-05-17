import React  from 'react'
import Helmet from 'react-helmet'

const Seo = () => (
  <Helmet
    title='Banxe'
    meta={[
      {
        name: 'description',
        lang: 'ru',
        content: 'Banxe',
      },
      {
        name: 'description',
        lang: 'en',
        content: 'Banxe',
      },
      {
        property: 'og:title',
        content: 'Banxe',
      },
      {
        property: 'og:description',
        lang: 'ru',
        content: 'Banxe',
      },
      {
        property: 'og:description',
        lang: 'en',
        content: 'Banxe',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: 'Banxe',
      },
      {
        name: 'twitter:description',
        lang: 'ru',
        content: 'Banxe',
      },
      {
        name: 'twitter:description',
        lang: 'en',
        content: 'Banxe',
      },
    ]}
  />
)

export { Seo }
