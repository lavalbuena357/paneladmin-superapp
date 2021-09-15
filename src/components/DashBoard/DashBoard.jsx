import React, { useState } from 'react'
import style from './DashBoard.module.css'
import { Route, useHistory } from "react-router-dom"
import LeftPanel from './LeftPanel/LeftPanel'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import Usuarios from './Usuarios/Usuarios'
import VerUsuario from './Usuarios/VerUsuario/VerUsuario'

function DashBoard() {
  const [active, setActive] = useState('inicio')

  const history = useHistory()

  return (
    <div className={`${style.dashboard} ${style.parent_div}`} style={{ backgroundColor: '#f7f7f7' }}>
      <div className={style.dashboard_inner}>
        <LeftPanel setActive={setActive} active={active} />
        <div className={style.dashboard_inner_2}>
          <div>
            <Nav setActive={setActive} active={active} />
          </div>
          <div className={`${style.dashboard_inner_3} ${style.custom_scroll_y}`}>
            <Route exact path='/inicio'>
              <Main />
            </Route>
            <Route path='/inicio/usuarios'>
              <Usuarios />
            </Route>
            <Route path='/inicio/ver-usuario'>
              <VerUsuario />
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
