import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './Nav.module.css'
import defaultAvatar from '../../../assets/img/avatars/default.png'
import { BsList } from "react-icons/bs"

function Nav({setActive, active}) {

  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  
  function handleHome() {
    setActive('inicio')
    history.push('/inicio')
  }

  return (
    <div className={style.nav_1}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <div className={style.vertic_separator_1}></div> */}
        <span className={style.project_name} onClick={handleHome}>
          Admin Panel
        </span>
        <div className={style.vertic_separator_2}></div>
      </div>

      <div className={style.right}>
        <div className={style.user_elements}>
          Hola, &nbsp;<strong>{(`${currentUser && currentUser.nombres} ${currentUser && currentUser.apellidos}`) || '∅'}</strong>
          <img src={defaultAvatar} alt="" />
        </div>
        <BsList style={{ cursor: 'pointer', marginLeft: '1rem', fontSize: '30px', color: '#1FAEEF' }} />
      </div>

    </div>
  )
}

export default Nav
