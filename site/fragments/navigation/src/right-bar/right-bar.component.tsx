import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { ArrowDownIcon }   from '@ui/icons'
import { BellHexagonIcon } from '@ui/icons'
import { BritainIcon }     from '@ui/icons'
import { ChinaIcon }       from '@ui/icons'
import { RussiaIcon }      from '@ui/icons'
import { SpainIcon }       from '@ui/icons'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Select }          from '@ui/select'
import { Text }            from '@ui/text'

import { User }            from '../user'

const RightBar: FC = () => {
  const languages = [
    {
      content: 'RU',
      icon: <RussiaIcon width={32} height={16} />,
    },
    {
      content: 'EN',
      icon: <BritainIcon width={32} height={16} />,
    },
    {
      content: 'ES',
      icon: <SpainIcon width={32} height={16} />,
    },
    {
      content: 'CN',
      icon: <ChinaIcon width={32} height={16} />,
    },
  ]

  const [language, setLanguage] = useState(languages[0])

  return (
    <Box alignItems='center' width={[0, 248, 348]} height={[0, 56, 48]}>
      <Box alignItems='center' width={100} display={['flex', 'flex', 'none']}>
        <Layout>{language.icon}</Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontSize='default' fontWeight='meidum' lineHeight='unset'>
            {language.content}
          </Text>
        </Layout>
        <Layout flexBasis={8} />
        <Box width={8} height={4}>
          <ArrowDownIcon width={8} height={4} />
        </Box>
      </Box>
      <Layout flexBasis={13} />
      <Box width={44} height={44}>
        <BellHexagonIcon width={44} height={44} />
      </Box>
      <Layout flexBasis={13} />
      <Box width={163} height={44}>
        <User />
      </Box>
      <Layout flexBasis={24} />
      <Box minWidth={100} display={['none', 'none', 'flex']}>
        <Select value={language} onChange={setLanguage} items={languages} />
      </Box>
    </Box>
  )
}

export { RightBar }
