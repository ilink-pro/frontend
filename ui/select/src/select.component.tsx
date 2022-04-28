import { useSelect }      from '@ilink-ui-parts/select'

import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { Condition }      from '@ui/condition'
import { ArrowDownIcon }  from '@ui/icons'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'

import { ArrowContainer } from './arrow-container'
import { Menu }           from './menu'
import { MenuItem }       from './menu-item'
import { SelectProps }    from './select.interface'

const Select: FC<SelectProps> = ({ items, value, onChange, placeholder, disabled }) => {
  const {
    isOpen,
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
    selectedItem,
    highlightedIndex,
  } = useSelect({
    // @ts-ignore
    items,
    onChange,
  })

  return (
    <Row>
      <Column fill>
        <Button
          variant='secondary'
          isSelected={!!selectedItem}
          disabled={disabled}
          {...buttonProps}
        >
          <Row alignItems='center'>
            <Layout flexBasis={16} />
            {/* @ts-ignore */}
            <Condition match={!!selectedItem?.icon || !!value?.icon}>
              {/* @ts-ignore */}
              <Layout height={16}>{(value && value?.icon) || selectedItem?.icon}</Layout>
              <Layout flexShrink={0} flexBasis={8} />
            </Condition>
            <Layout height={20}>
              <Text fontSize='default' whiteSpace='nowrap' lineHeight='unset'>
                {(value && value?.content) ||
                  // @ts-ignore
                  (selectedItem && selectedItem?.content) ||
                  placeholder}
              </Text>
            </Layout>
            <Layout flexShrink={0} flexBasis={8} flexGrow={1} />
            <ArrowContainer isOpen={isOpen}>
              <ArrowDownIcon width={8} height={4} />
            </ArrowContainer>
            <Layout flexBasis={16} />
          </Row>
        </Button>
        {renderMenu(
          <Menu {...menuProps}>
            {items.map((item, index) => (
              <MenuItem
                {...getMenuItemProps(item.content, index)}
                highlighted={index === highlightedIndex}
                icon={item.icon}
              >
                {item.content}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Column>
    </Row>
  )
}

export { Select }
