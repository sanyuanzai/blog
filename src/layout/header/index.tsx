import React from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderContainer } from './style'
import { navList } from './nav_config'
import { NavLink } from 'react-router-dom'
interface Iprops {
  children?: ReactNode
}

const Header: FC<Iprops> = () => {
  return (
    <HeaderContainer>
      <div className="left">
        <h1>Header</h1>
      </div>
      <div className="right">
        {navList.map((item) =>
          item.to ? (
            <NavLink className="menuItem" key={item.name} to={item.to}>
              {item.name}
            </NavLink>
          ) : (
            <div className="menuItem" key={item.name}>
              {item.name}
            </div>
          )
        )}
      </div>
    </HeaderContainer>
  )
}
export default Header
