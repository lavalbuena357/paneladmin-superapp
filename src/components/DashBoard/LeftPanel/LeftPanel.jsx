import React from 'react'
import logo from '../../../assets/img/logo-alcaldia.png'
import { BsFillHouseDoorFill } from "react-icons/bs"
import { useHistory } from "react-router-dom"
import style from './LeftPanel.module.css'

function LeftPanel({setActive, active}) {

  const history = useHistory()

  function onClickOption(e, route) {
    setActive(e.target.id)
    history.push(route)
  }

  return (
    <div className={style.left_panel_1}>
      <div className={style.top_div}>
        <img src={logo} alt="" />
      </div>
      <div className={`${style.navbar_list} ${style.custom_scroll_y}`}>
        <div 
          className={active === 'inicio' ? `${style.active} ${style.general_access}` : style.general_access}  
        >
          <div className={active === 'inicio' ? `${style.active_bullet} ${style.bullet}` : style.bullet} />
          <h5 id='inicio' onClick={(e) => onClickOption(e, '/inicio')}>
            <BsFillHouseDoorFill />
            Accesos Generales
          </h5>
        </div>

        <div className={style.navbar_group} >
          <div className={active === 'usuarios' ? `${style.active} ${style.heading}` : style.heading}>
            <div className={active === 'usuarios' ? `${style.active_bullet} ${style.bullet}` : style.bullet} />
            <span 
              id='usuarios' 
              className={style.text} 
              onClick={(e) => onClickOption(e, '/inicio/usuarios')}
            >Usuarios</span>
          </div>
        </div>

        <div className={style.navbar_group} >
          <div className={active === 'modulos' ? `${style.active} ${style.heading}` : style.heading}>
            <div className={active === 'modulos' ? `${style.active_bullet} ${style.bullet}` : style.bullet} />
            <span id='modulos' className={style.text} onClick={(e) => onClickOption(e, '/inicio/modulos')}>Modulos</span>
          </div>
        </div>

        <div className={style.navbar_group} >
          <div className={active === 'acciones' ? `${style.active} ${style.heading}` : style.heading}>
            <div className={active === 'acciones' ? `${style.active_bullet} ${style.bullet}` : style.bullet} />
            <span id='acciones' className={style.text} onClick={(e) => onClickOption(e, '/inicio/acciones')}>Acciones</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftPanel
