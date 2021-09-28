import React from 'react'

// import { ReactComponent as Logo } from '../../@core/assets/logo.svg'

import * as Styled from './styles'

interface NavViewProps {
  goTo(location: string): void
  children?: any
}

function NavView ({ goTo, children }: NavViewProps) {
  return (
    <>
      <Styled.Wrapper>
        <Styled.LogoWrapper>
          {/* <Logo width="50" /> */}
          <h1>Micro e-commerce</h1>
        </Styled.LogoWrapper>
        <Styled.NavOptionsWrapper>
          <Styled.NavOptions>
            <li onClick={() => goTo('/app')}>Products</li>
            <li onClick={() => goTo('/checkout')}>Checkout</li>
          </Styled.NavOptions>
        </Styled.NavOptionsWrapper>
      </Styled.Wrapper>
      <Styled.ScreenWrapper>
        {children}
      </Styled.ScreenWrapper>
    </>
  )
}

export default NavView