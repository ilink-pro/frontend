import React                from 'react'
import { FC }               from 'react'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'

import { Address }          from './address'
import { BasicInformation } from './basic-information'
import { KYCLayout }        from './kyc-layout'
import { Progress }         from './progress'
import { ProofOfIdentityOne } from './proof-of-identity-one'
import { ProofOfIdentityTwo } from './proof-of-identity-two'
import { Sidebar }          from './sidebar'
import { Step }             from './store'
import { StepProvider }     from './store'
import { StepConsumer }     from './store'

const ProgressRenderer = () => (
  <StepConsumer>
    {([step]) => (
      <Progress
        items={[
          Step.BASIC_INFORMATION,
          Step.ADDRESS,
          Step.PROOF_OF_IDENTITY_1,
          Step.PROOF_OF_IDENTITY_2,
          Step.PROOF_OF_ADDRESS,
          Step.DATA_VERIFICATION,
        ]}
        active={step}
      />
    )}
  </StepConsumer>
)

const KYC: FC = () => {
  return (
    <StepProvider>
      <KYCLayout>
        <Row display={['flex', 'flex', 'none']}>
          <Layout flexBasis={19} />
          <ProgressRenderer />
          <Layout flexBasis={19} />
        </Row>
        <Box width={['100%', '100%', 1120]} height={['auto', 'auto', 872]}>
          <Sidebar>
            <ProgressRenderer />
          </Sidebar>
          <Box width={['100%', '100%', 736]} height='100%' border='soft'>
            <StepConsumer>
              {([step]) => (
                <>
                  <Condition match={step === Step.BASIC_INFORMATION}>
                    <BasicInformation nextStep={Step.ADDRESS} />
                  </Condition>
                  <Condition match={step === Step.ADDRESS}>
                    <Address
                      prevStep={Step.BASIC_INFORMATION}
                      nextStep={Step.PROOF_OF_IDENTITY_1}
                    />
                  </Condition>
                  <Condition match={step === Step.PROOF_OF_IDENTITY_1}>
                    <ProofOfIdentityOne prevStep={Step.ADDRESS} nextStep={Step.PROOF_OF_IDENTITY_2} />
                  </Condition>
                  <Condition match={step === Step.PROOF_OF_IDENTITY_2}>
                    <ProofOfIdentityTwo
                      prevStep={Step.PROOF_OF_IDENTITY_1}
                      nextStep={Step.PROOF_OF_ADDRESS}
                    />
                  </Condition>
                </>
              )}
            </StepConsumer>
          </Box>
        </Box>
      </KYCLayout>
    </StepProvider>
  )
}

export { KYC }
