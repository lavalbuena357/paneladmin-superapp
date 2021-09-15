import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getUsers } from '../../../redux/actions'
import { useHistory } from 'react-router'
import { BsPencil, BsSearch } from "react-icons/bs"
import style from './Usuarios.module.css'

function Usuarios({getUsers, all_users}) {

  useEffect(() => {
    getUsers()
  },[])

  const history = useHistory()

  function handleRoute(route) {
    history.push(route || '')
  }

  async function handleEditUser(route, i) {
    await localStorage.setItem('user', JSON.stringify(all_users[i]))
    handleRoute(route)
  }

  async function handleViewUser(route, i) {
    await localStorage.setItem('user', JSON.stringify(all_users[i]))
    handleRoute(route)
  }

  function handleCreateUser(route) {
    handleRoute(route)
  }

  return (
    <div>
      <Button
        className={`${style.btn_crear_usuario} btn btn-primary mt-4 mb-4`}
        variant="primary"
        type="submit"
        onClick={() => handleCreateUser('/inicio/crear-usuario')}
      >Crear Usuario</Button>

      <table className='table'>
        <thead>
          <tr>
            <th scope="col" >ID</th>
            <th scope="col" >Perfil</th>
            <th scope="col" >Estado</th>
            <th scope="col" >Usuario</th>
            <th scope="col" >E-mail</th>
            <th scope="col" >Consultar</th>
            <th scope="col" >Modificar</th>
          </tr>
        </thead>
        <tbody>
          {
            all_users.length > 0 ?
            all_users.map((u, i) => (
              <tr key={i}>
                <td >{u.id}</td>
                <td >{u.data ? u.data.perfil : 'Ciudadano'}</td>
                <td >{u.estado === '1' || !u.estado ? 'Activo' : 'Inactivo'}</td>
                <td >{u.nombres + ' ' + u.apellidos}</td>
                <td >{u.correo}</td>
                <td ><BsSearch onClick={() => handleViewUser('/inicio/ver-usuario', i)} /></td>
                <td ><BsPencil onClick={() => handleEditUser('/inicio/editar-usuario', i)} /></td>
              </tr>
            ))
            :
            <tr>
                <td colSpan="6" className="text-center">No hay registros</td>
            </tr>
          } 
        </tbody>
      </table>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    all_users: state.all_users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
