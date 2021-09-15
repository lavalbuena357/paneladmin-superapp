import React, {useState} from 'react'
import style from './EditarUsuario.module.css'
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

function EditarUsuario() {

  const user = JSON.parse(localStorage.getItem('user'))

  const [newValues, setNewValues] = useState({
    tipo_documento: user.tipo_documento,
    nombres: user.nombres,
    apellidos: user.apellidos,
    correo: user.correo,
    direccion: user.direccion,
    barrio: user.barrio,
    telefono: user.telefono,
    celular: user.celular,
    pais: user.pais,
    departamento: user.departamento,
    ciudad: user.ciudad,
    genero: user.genero,
    estado: user.estado,
  })
  const [modalMsg, setModalMsg] = useState({title: '', msg: ''})

  console.log(newValues.tipo_documento)

  // const user = JSON.parse(localStorage.getItem('user'))
  const history = useHistory()

  const [message, setMessage] = useState({msg: '', variant: 'info'})

  function handleChange() {

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
          <h5 className='mb-4'><strong>Modificar Usuario: {user.nombres} {user.apellidos}</strong></h5>

          <h6 className='mt-3 mb-3'>Información Personal</h6>
          <Row>
            <Col md={6} lg={4}>
              <Form.Group controlId="selectIdType">
                <Form.Label>Tipo identificación </Form.Label>
                <Form.Control as="select" name='tipo_documento' value={newValues.tipo_documento} onChange={handleChange}>
                  <option value={''}>{newValues.tipo_documento}</option>
                  <option value={'1-Cedula de Ciudadanía'}>1-Cedula de Ciudadanía</option>
                  <option value={'2-Tarjeta de identidad'}>2-Tarjeta de identidad</option>
                  <option value={'3-Cedula de Extranjería'}>3-Cedula de Extranjería</option>
                  <option value={'4-NIT'}>4-NIT</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group controlId="txtFirstame">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" name='nombres' value={newValues.nombres} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group controlId="txtLastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" name='apellidos' value={newValues.apellidos} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="txtEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" name='correo' value={newValues.correo} onChange={handleChange}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtCell">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" name='celular' value={newValues.celular} onChange={handleChange}/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name='telefono' value={newValues.telefono} onChange={handleChange}/>
              </Form.Group>
            </Col>
            <Col md={6} lg={3}>
              <Form.Label>Género</Form.Label><br/>
                <Form.Control as="select" name='genero' value={newValues.genero} onChange={handleChange}>
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
                <Form.Label>País</Form.Label>
                <Form.Control type="text" name='pais' value={newValues.pais} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtState">
                <Form.Label><span style={{color: '#E0E1E2'}}>Departamento</span></Form.Label>
                <Form.Control type="text" name='departamento' value={newValues.departamento} onChange={handleChange} disabled/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtCity">
                <Form.Label><span style={{color: '#E0E1E2'}}>Ciudad</span></Form.Label>
                <Form.Control type="text" name='ciudad' value={newValues.ciudad} onChange={handleChange} disabled/>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group controlId="txtAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name='direccion' value={newValues.direccion} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <Form.Group controlId="txtNeighborhood">
                <Form.Label>Barrio <span style={{color: '#E0E1E2'}}>- Opcional</span></Form.Label>
                <Form.Control type="text" name='barrio' value={newValues.barrio} onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <br/>
          {
            message.msg ?
            <Alert variant={message.variant} onClose={() => setMessage({msg: ''})} dismissible>
              <p>{message.msg}</p>
            </Alert>
            : null
          }
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

export default EditarUsuario
