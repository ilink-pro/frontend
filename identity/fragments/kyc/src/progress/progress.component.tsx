import React                from 'react'
import { FC }               from 'react'
import { useIntl }          from 'react-intl'

import { Condition }        from '@ui/condition'
import { Layout }           from '@ui/layout'

import { Step as StepEnum } from '../store'
import { ProgressProps }    from './progress.interfaces'
import { Step }             from './step'

const convertStepName = (step: StepEnum) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { formatMessage } = useIntl()

  if (step === StepEnum.BASIC_INFORMATION)
    return formatMessage({ id: 'kyc.basic_information', defaultMessage: 'Basic information' })
  if (step === StepEnum.ADDRESS)
    return formatMessage({ id: 'kyc.address', defaultMessage: 'Address' })
  if (step === StepEnum.PROOF_OF_IDENTITY_1)
    return formatMessage({
      id: 'kyc.proof_of_identity_step_1',
      defaultMessage: 'Proof of identity step 1',
    })
  if (step === StepEnum.PROOF_OF_IDENTITY_2)
    return formatMessage({
      id: 'kyc.proof_of_identity_step_2',
      defaultMessage: 'Proof of identity step 2',
    })
  if (step === StepEnum.PROOF_OF_ADDRESS)
    return formatMessage({ id: 'kyc.proof_of_address', defaultMessage: 'Proof of address' })
  if (step === StepEnum.DATA_VERIFICATION)
    return formatMessage({ id: 'kyc.data_verification', defaultMessage: 'Data verification' })

  return ''
}

const Progress: FC<ProgressProps> = ({ items, active }) => (
  <Layout width={['100%', '100%', 'auto']}>
    <Layout width={['100%', '100%', 'auto']} flexDirection={['row', 'row', 'column']}>
      {items.map((item, index) => (
        <>
          <Condition match={index !== 0}>
            <Layout flexBasis={32} />
          </Condition>
          <Step active={active === item} index={index + 1}>
            {convertStepName(item as StepEnum)}
          </Step>
        </>
      ))}
    </Layout>
  </Layout>
)

export { Progress }
