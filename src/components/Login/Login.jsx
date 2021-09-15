import React, { useRef, useState, useEffect } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import logo_alcaldia from '../../assets/img/logo-alcaldia.png'
import style from './Login.module.css'
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom'
import { auth } from '../../redux/actions'



function Login({ auth, admins }) {

  const [message, setMessage] = useState({msg: '', heading: '', variant: 'info'})
  const usuario = useRef(null)
  const contra = useRef(null)
  const [showPass, setShowPass] = useState({show: false, type: 'password'})
  const [btnLogin, setBtnLogin] = useState({disabled: true, style: style.btn_disabled })

  useEffect(() => {
    auth()
  }, [])

  const history = useHistory()

  function handleChange() {
    if(usuario.current.value && contra.current.value) {
      setBtnLogin({...btnLogin, disabled:false, style: style.btn_login})
    } else {
      setBtnLogin({...btnLogin, disabled:true, style: style.btn_disabled})
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(!usuario.current.value.trim() || !contra.current.value.trim()) {
      return setMessage({msg: 'Debe llenar los campos', heading: 'Advertencia!', variant: 'warning'})
    }
    
    const txtUser = usuario.current.value
    const currentU = admins && admins.length && admins.filter(el => el.data && el.data.usuario === txtUser)

    if (!currentU.length) {
      return setMessage({msg: 'El usuario no existe', heading: 'Error', variant: 'danger'})
    }
    if (currentU[0].data.contra !== contra.current.value) {
      return setMessage({
        msg: 'El usuario o la contraseña son incorrectos. Número de intentos restantes: 1',
        heading: 'Error',
        variant: 'danger'
      })
    }

    if(currentU[0].estado === '0') {
      return setMessage({
        msg: 'El usuario se encuentra bloqueado. Demasiados intentos fallidos',
        heading: 'Error',
        variant: 'danger'
      })
    }

    setMessage({msg: '', heading: ''})
    localStorage.setItem('currentUser', JSON.stringify(currentU[0]))
    history.push('/inicio')
    return
  }

  

  return (
    <div className={style.login_div}>
      <img src={logo_alcaldia} alt="Logo admin panel" />
      <h6 className={style.login_title}>Admin Panel Super App</h6>
      <legend style={{ marginTop: '2rem' }}>
        <strong>Ingrese sus datos para iniciar sesión</strong>
      </legend>
      <Form className='mt-4' onFocus={() => setMessage({msg:'', heading:''})}>
        <Form.Group controlId='formBasicEmail' className={style.form_basic_email}>
          <Form.Label>Usuario</Form.Label>
          <Form.Control type='text' ref={usuario} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='formBasicContra' className={style.form_basic_contra}>
          <Form.Label>Contraseña</Form.Label>
          <div className='d-flex' style={{position:'relative'}}>
            <Form.Control type={showPass.type} ref={contra} onChange={handleChange} />
            {!showPass.show ? 
              <BsEyeFill onClick={() => setShowPass({...showPass, show: !showPass.show, type: 'text'})} className={style.icon_show_pass} /> 
              : 
              <BsEyeSlashFill onClick={() => setShowPass({...showPass, show: !showPass.show, type: 'password'})} className={style.icon_show_pass} />
            }
          </div>
        </Form.Group>
        <Button className={`${btnLogin.style} mt-4 mb-4`} disabled={btnLogin.disabled} onClick={handleSubmit}>INGRESAR</Button>
        {message.msg ? 
          <Alert variant={message.variant} onClose={() => setMessage({msg: '', heading: ''})} dismissible>
            {
              message.heading ? 
                <>
                  <Alert.Heading><span style={{ fontSize: '1.2rem' }}>{message.heading}</span></Alert.Heading>
                  <hr/>
                </> : null
            }
            <p>{message.msg}</p>
          </Alert> : null
        }
        <hr />

        <legend className='text-center'>
          <span>¿Olvidaste tu contraseña?</span> &nbsp;
          <span>
            <a
              href='/recuperar-contrasena'
              onClick={e => { e.preventDefault(); history.push('/recuperar-contrasena') }}
            >Recupérala AQUÍ</a>
          </span>
        </legend>
      </Form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    admins: state.admins,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: () => dispatch(auth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
