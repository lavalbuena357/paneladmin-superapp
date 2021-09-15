import React from 'react'
import { Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import style from './Main.module.css'
import iconUsers from '../../../assets/img/user-icon.png'
import iconModules from '../../../assets/img/modules-icon.png'
import iconActions from '../../../assets/img/actions-icon.png'

function Main() {

  const history = useHistory()

  function hideBottomEls(){

  }

  function onEnterCol() {

  }

  function onLeaveCol() {

  }

  return (
    <div style={{display:'flex'}}>
      <div className={style.dashb_main_div}>
        <h4 className={style.main_title}>Bienvenido a el Panel de Administración de Super APP</h4>
        <br/>
        <p className={style.main_description}>Acá podrá acceder y consultar todos los usuarios registrados, visualizar y hacer seguimiento
        <br/> a los diferentes módulos y acciones disponibles en la <strong>Super App</strong>.</p><br/>

        <div>
          <div className={style.dashb_main_div_2} onMouseLeave={hideBottomEls}>
            <div className={style.icons}>

              {/* SECCION USUARIOS */}
              <Col className={style.hcp_col}>
                <div className={style.main_icon} onClick={() => history.push('/inicio/usuarios')} >
                  <div>
                    <img src={iconUsers} alt="icono de usuarios" />
                  </div>
                </div>
                <h4>Usuarios</h4>
                <div className={style.underline} />
                <p>Consultar y gestionar usuarios administradores y ciudadanos.</p>
              </Col>

              {/* SECCION MODULOS */}
              <Col className={style.hcp_col}>
                <div className={style.main_icon} onClick={() => history.push('/inicio/modulos')} >
                  <div>
                    <img src={iconModules} alt="icono de modulos" />
                  </div>
                </div>
                <h4>Módulos</h4>
                <div className={style.underline} />
                <p>Administración de los módulos de la Super App para visualizar noticias, encuestas, etc.</p>
              </Col>

              {/* SECCION ACCIONES */}
              <Col className={style.hcp_col}>
                <div className={style.main_icon} onClick={() => history.push('/inicio/acciones')} >
                  <div>
                    <img src={iconActions} alt="icono de acciones" />
                  </div>
                </div>
                <h4>Acciones</h4>
                <div className={style.underline} />
                <p>Administrar las acciones que los usuarios pueden realizar.</p>
              </Col>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main
