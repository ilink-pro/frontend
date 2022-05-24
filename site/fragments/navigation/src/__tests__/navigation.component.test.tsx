import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextNavLink }      from '@ui/link'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'

import { ExpandableLink }   from './expandable-link'
import { RightBar }         from './right-bar'

export const Navigation = () => (
  <Box
    height={['auto', 'auto', 112]}
    width='100%'
    overflow='hidden'
    justifyContent='center'
    backgroundColor='background.lightPurple'
    display={['none', 'flex', 'flex']}
    zIndex={10}
  >
    <Layout justifyContent='center' width={['100%', '100%', 1098]}>
      <Column fill>
        <Layout flexShrink={0} flexBasis={[13, 32, 24]} />
        <Row justifyContent='center' alignItems='center'>
          <Layout flexShrink={0} flexBasis={16} />
          <Box width={56} height={65} display={['none', 'none', 'flex']}>
            <Logo />
          </Box>
          <Layout flexBasis={36} />
          <Box width={['100%', '100%', 633]}>
            <Column fill>
              <Row alignItems='center'>
                <Box display={['none', 'flex', 'none']}>
                  <Logo />
                </Box>
                <Layout flexBasis={[0, 31, 0]} />
                <Layout>
                  <ExpandableLink
                    content={<FormattedMessage id='navigation.products' defaultMessage='Product' />}
                  />
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <ExpandableLink
                    content={<FormattedMessage id='navigation.about' defaultMessage='About' />}
                  />
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextLink keep fontSize='semiRegular' color='text.secondary' fontWeight='bold'>
                    <FormattedMessage id='navigation.help_center' defaultMessage='Help Center' />
                  </NextLink>
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextLink keep fontSize='semiRegular' color='text.secondary' fontWeight='bold'>
                    <FormattedMessage id='navigation.learn_hub' defaultMessage='Learn Hub' />
                  </NextLink>
                </Layout>
                <Layout flexBasis={73} />
                <Layout display={['none', 'flex', 'none']}>
                  <RightBar />
                </Layout>
              </Row>
              <Layout flexBasis={12} />
              <Row>
                <Divider backgroundColor='background.lightPurpleAccent' weight={1} />
              </Row>
              <Layout flexBasis={12} />
              <Row justifyContent={['flex-start', 'center', 'flex-start']}>
                <Layout>
                  <NextNavLink keep path='/' fontSize='semiRegular' fontWeight='bold'>
                    <FormattedMessage id='navigation.home' defaultMessage='Home' />
                  </NextNavLink>
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextNavLink keep path='/crypto-wallets' fontSize='semiRegular' fontWeight='bold'>
                    <FormattedMessage
                      id='navigation.crypto_wallets'
                      defaultMessage='Crypto Wallets'
                    />
                  </NextNavLink>
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextNavLink keep path='/transactions' fontSize='semiRegular' fontWeight='bold'>
                    <FormattedMessage id='navigation.transactions' defaultMessage='Transactions' />
                  </NextNavLink>
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextNavLink keep path='/crypto-earn' fontSize='semiRegular' fontWeight='bold'>
                    <FormattedMessage id='navigation.crypto_earn' defaultMessage='Crypto Earn' />
                  </NextNavLink>
                </Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <NextNavLink keep path='/crypto-trade' fontSize='semiRegular' fontWeight='bold'>
                    <FormattedMessage id='navigation.crypto_trade' defaultMessage='Crypto Trade' />
                  </NextNavLink>
                </Layout>
              </Row>
            </Column>
          </Box>
          <Layout flexBasis={33} />
          <Layout display={['none', 'none', 'flex']}>
            <RightBar />
          </Layout>
          <Layout flexShrink={0} flexBasis={16} />
        </Row>
        <Layout flexShrink={0} flexBasis={[13, 32, 24]} />
      </Column>
    </Layout>
  </Box>
)
