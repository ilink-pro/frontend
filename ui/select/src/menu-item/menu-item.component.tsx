import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'

import { MenuItemProps }  from './menu-item.interface'
import { baseItemStyles } from './menu-item.styles'

const Container = styled.li<any>(baseItemStyles)

const MenuItem: FC<MenuItemProps> = ({ highlighted, children, icon, ...props }) => (
  <Container highlighted={highlighted} {...props}>
    <Layout flexBasis={16} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={8} flexShrink={0} />
      <Column>
        <Layout flexBasis={6} flexShrink={0} />
        <Layout>
          <Condition match={!!icon}>
            {icon}
            <Layout flexShrink={0} flexBasis={8} />
          </Condition>
          <Text fontSize='default' fontWeight='medium'>
            {children}
          </Text>
        </Layout>
        <Layout flexBasis={6} flexShrink={0} />
      </Column>
      <Layout flexBasis={8} flexShrink={0} />
    </Column>
    <Layout flexBasis={16} flexShrink={0} />
  </Container>
)

export { MenuItem }
