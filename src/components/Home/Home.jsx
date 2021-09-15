import React from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../Login/Login'
import bg_login from '../../assets/img/img-login-superapp.jpg'
import style from './Home.module.css'
import DashBoard from '../DashBoard/DashBoard'

function Home() {

  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  // localStorage.clear()
  
  return (
    <div className={style.parent_div}>
      {currentUser ? 
        history.push('/inicio') 
        :<div className={style.home_inner_1}>
          <div className={style.home_inner_1_1}>
            <img src={bg_login} alt="" className={style.bg_login} />
          </div>
          <div className={`${style.home_inner_1_2} ${style.custom_scroll}`}>
            <Login /> 
          </div>
        </div>
      }
    </div>
  )
}


export default Home
