import React, { useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Input, Switch } from 'antd'
import { HeaderContainer } from './style'
import { navList } from './nav_config'
import { NavLink, useNavigate } from 'react-router-dom'
import classnames from 'classnames'

interface Iprops {
  children?: ReactNode
  setMode: (mode: number) => void
  mode: number
}
const Header: FC<Iprops> = ({ setMode, mode }) => {
  const navigate = useNavigate()
  const { Search } = Input
  // const [active, setActive] = useState(-1)
  // useEffect(() => {
  //   console.log(window.location.pathname)
  // })
  function onSearch(keyword: string) {
    console.log(keyword)
  }
  function switchModeHandler(checked: boolean) {
    if (checked) {
      setMode(1)
    } else {
      setMode(0)
    }
  }
  return (
    <HeaderContainer>
      <div className="top" onClick={() => navigate('/')}>
        <h1>Header</h1>
      </div>
      <div className="bottom">
        <div className="left">
          {navList.map((item, index) => (
            <NavLink
              className={classnames('menuItem', {
                active: item.to === window.location.pathname
              })}
              key={item.name}
              to={item.to}
              // onClick={() => setActive(index)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="right">
          <Switch
            onChange={switchModeHandler}
            defaultChecked={mode === 1 ? true : false}
          />
          <Search placeholder="search" onSearch={onSearch} />
        </div>
      </div>
    </HeaderContainer>
  )
}
export default Header
