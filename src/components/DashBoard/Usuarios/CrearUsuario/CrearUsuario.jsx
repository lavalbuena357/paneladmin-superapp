import React, { useRef, useState } from 'react'
// import style from './CrearUsuario.module.css'
import { 
  Alert,
  Button,
  Col,
  Form,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { createUser, getUsers } from '../../../../redux/actions'

function CrearUsuario({createUser, getUsers}) {

  const tempPassword = Math.random().toString(36).slice(2)

  const [usuario, setUsuario] = useState({
    tipo_sociedad: '',
    tipo_entidad: 'NINGUNO',
    tipo_documento: '',
    documento: '',
    nombres: '',
    apellidos: '',
    correo: '',
    direccion: '',
    barrio: '',
    telefono: '',
    celular: '',
    pais: 'CO',
    departamento: '05-ANTIOQUIA',
    ciudad: '05001-MEDELLÍN',
    genero: '',
    estado: '0',
    data: {
      perfil: 'admin',
      usuario: '',
      contra: tempPassword
    }
  })
  
  const [modalMsg, setModalMsg] = useState({title: '', msg: ''})

  const history = useHistory()

  function handleChange(e) {
    if(fieldsAreFilled()){
      setActionsBtnsState(<>{btnCancel}{btnRegisterEnabled}</>)
    } else {
      setActionsBtnsState(<>{btnCancel}{btnRegisterDisabled}</>)
    }
    const { name, value } = e.target
    setUsuario({...usuario, [name]: value})
    console.log(usuario)
  }

  const btnRegisterDisabled = <Button className='btn-disabled ml-4 mt-4 mb-4' disabled> REGISTRAR </Button>

  const btnRegisterEnabled = <Button className='btn-clap btn-action mt-4 mb-4' variant="primary" type="submit" onClick={e => handleSubmit(e)}> REGISTRAR </Button>

  const btnCancel = <a className='btn-cancel' href='/' onClick={e => {e.preventDefault(); history.push('/inicio/usuarios')}}>CANCELAR</a>

  const [actionsBtnsState, setActionsBtnsState] = useState(<>{btnCancel}{btnRegisterDisabled}</>)

  const [message, setMessage] = useState({msg: '', variant: 'info'})


  const fieldsAreFilled = function() {
    if(!usuario.tipo_sociedad
        || !usuario.tipo_documento
        || !usuario.documento
        || !usuario.nombres
        || !usuario.apellidos
        || !usuario.correo
        || !usuario.direccion
        || !usuario.telefono
        || !usuario.pais
        || !usuario.departamento
        || !usuario.ciudad
        || !usuario.genero
      ){ return false} else { return true }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if(!fieldsAreFilled()){
      return setMessage({
        msg: 'Por favor llene todos los campos requeridos', 
        variant: 'warning'
      })
    }

    setActionsBtnsState(<Spinner 
      animation="border" 
      variant="secondary" 
      style={{display: 'block', margin: 'auto'}}
    />)

    await createUser({...usuario})
    // history.push('/inicio/usuarios')

    setModalMsg({
      msg: '<div class="divTituloMensaje">'
      + 'Usuario administrador creado con éxito'
      + '</div><br>'
      + '<div class="divCuerpoMensaje">Una <b>contraseña provisional</b> '
      + 'fue enviada a su dirección de correo electrónico, '
      + 'deberá cambiarla en el primer ingreso por '
      + 'una de su preferencia.<br><br> Recuerde que el usuario es su documento de identidad.'
      + '</div><br>'
      + `Contraseña provisional: (<b>${tempPassword}</b>)`, 
    })

  }

  return (
    <div className='register-div custom-scroll'>
      {modalMsg.msg ? 
        <ModalAlert 
          show={Boolean(modalMsg.msg)}
          onHide={() => setModalMsg({title: '', msg: ''})}
          modalMsg={modalMsg}
          history={history}
        /> : null
      }

      <div className='register-div-2'>
        <Form className='mt-4'>
          <h5 className='mb-4'><strong>Registro de Usuario</strong></h5>
          <Row>
            <Col lg={3}>
              <Form.Group controlId='selectSocType'>
                <Form.Label>Tipo de Sociedad (*)</Form.Label>
                <Form.Control as="select" name='tipo_sociedad' value={usuario.tipo_sociedad} onChange={handleChange}>
                  <option value={''}>Seleccionar</option>
                  <option value='N-Persona Natural'>N-Persona Natural</option>
                  <option value='J-Persona Juridica'>J-Persona Jurídica</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col lg={3}>
              <Form.Group controlId="selectEntityType">
                <Form.Label style={{color: '#E0E1E2'}}>Tipo de entidad</Form.Label>
                <Form.Control style={{color: '#797979'}} as="select" name='tipo_entidad' value={usuario.tipo_entidad} disabled onChange={handleChange}>
                  <option value={'NINGUNO'}>Seleccionar</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6}>
            </Col>
          </Row>

          <h6 className='mt-3 mb-3'>Información Personal</h6>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="selectIdType">
                <Form.Label>Tipo identificación (*)</Form.Label>
                <Form.Control as="select" name='tipo_documento' value={usuario.tipo_documento} onChange={handleChange}>
                  <option value={''}>Seleccionar</option>
                  <option value={'1-Cedula de Ciudadanía'}>1-Cedula de Ciudadanía</option>
                  <option value={'2-Tarjeta de identidad'}>2-Tarjeta de identidad</option>
                  <option value={'3-Cedula de Extranjería'}>3-Cedula de Extranjería</option>
                  <option value={'4-NIT'}>4-NIT</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtDocNumber">
                <Form.Label>Número documento (*)</Form.Label>
                <Form.Control type="text" name='documento' value={usuario.documento} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
              
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtFirstame">
                <Form.Label>Nombres (*)</Form.Label>
                <Form.Control type="text" name='nombres' value={usuario.nombres} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtLastame">
                <Form.Label>Apellidos (*)</Form.Label>
                <Form.Control type="text" name='apellidos' value={usuario.apellidos} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="txtEmail">
                <Form.Label>Correo (*)</Form.Label>
                <Form.Control type="text" name='correo' value={usuario.correo} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtCell">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" name='celular' value={usuario.celular} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtPhone">
                <Form.Label>Telefono (*)</Form.Label>
                <Form.Control type="text" name='telefono' value={usuario.telefono} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
            <Col md={6} lg={3}>
              <Form.Label>Género (*)</Form.Label><br/>
                <Form.Control as="select" name='genero' value={usuario.genero} onChange={handleChange} onFocus={() => setMessage({msg: ''})}>
                  <option value={''}>Seleccionar</option>
                  <option value={'m'}>Masculino</option>
                  <option value={'f'}>Femenino</option>
                  <option value={'o'}>Otro</option>
                </Form.Control>
            </Col>
          </Row>

          <h6 className='mt-3 mb-3'>Información de Domicilio</h6>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="txtCountry">
                <Form.Label>País (*)</Form.Label>
                <Form.Control type="text" name='pais' value={usuario.pais} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtState">
                <Form.Label><span style={{color: '#E0E1E2'}}>Departamento</span></Form.Label>
                <Form.Control type="text" name='departamento' value={usuario.departamento} onChange={handleChange} onFocus={() => setMessage({msg: ''})} disabled/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtCity">
                <Form.Label><span style={{color: '#E0E1E2'}}>Ciudad</span></Form.Label>
                <Form.Control type="text" name='ciudad' value={usuario.ciudad} onChange={handleChange} onFocus={() => setMessage({msg: ''})} disabled/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtAddress">
                <Form.Label>Dirección (*)</Form.Label>
                <Form.Control type="text" name='direccion' value={usuario.direccion} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="txtNeighborhood">
                <Form.Label>Barrio <span style={{color: '#E0E1E2'}}>- Opcional</span></Form.Label>
                <Form.Control type="text" name='barrio' value={usuario.barrio} onChange={handleChange} onFocus={() => setMessage({msg: ''})}/>
              </Form.Group>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Form.Group controlId="txtPolicy">
                <Form.Check 
                  type='checkbox'
                  id='default-checkbox'
                  label='El usuario que quiero crear es Administrador'
                />
              </Form.Group>
            </Col>
          </Row>

          {
            message.msg ?
            <Alert variant={message.variant} onClose={() => setMessage({msg: ''})} dismissible>
              <p>{message.msg}</p>
            </Alert>
            : null
          }

          <div className='action-buttons'>{actionsBtnsState}</div>

        </Form>
      </div>

    </div>
  )
}

function ModalAlert(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.modalMsg.title ? 
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.modalMsg.title}
          </Modal.Title>
        </Modal.Header>
        : null
      }
      <Modal.Body>
        <div dangerouslySetInnerHTML={{__html: (props.modalMsg && props.modalMsg.msg) || ''}} />
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={() => props.history.push('/inicio/usuarios')}>Aceptar</Button>
      </Modal.Footer>
    </Modal>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data) => dispatch(createUser(data)),
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(null, mapDispatchToProps)(CrearUsuario)
