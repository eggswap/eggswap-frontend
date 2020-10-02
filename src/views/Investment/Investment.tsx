import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import {
  Button
} from 'antd';
import { useWallet } from 'use-wallet-exp'

import chef from '../../assets/img/chef.png'

import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'
import styled from "styled-components";

const Investment: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <PageHeader
              icon={<img src={chef} height="120" />}
              subtitle="Earn extra SASHIMI tokens by Investment."
              title="Some delicate snacks"
            />
            <FarmCards />
          </>
        ) : (
          <StyledDiv>
            <Button
              onClick={onPresentWalletProviderModal}
              type="primary"
              size="large"

            >
              🔓 Unlock Wallet
            </Button>
          </StyledDiv>
        )}
      </Page>
    </Switch>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`

export default Investment
