import React from 'react'
import { useHistory } from 'react-router'

import NavView from '../../view/NavView'

interface NavProps {
  children: React.ReactNode
}

function Nav ({ children }: NavProps) {
  let history = useHistory()
  
  const handleChangePage = (location: string) => {
    history.push(location)
  }

  return (
    <NavView
      goTo={(page) => handleChangePage(page)}
      children={children}
    />
  )
}

export default Nav
