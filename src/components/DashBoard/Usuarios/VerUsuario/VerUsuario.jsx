import React from 'react'
import { connect } from 'react-redux'
import style from './VerUsuario.module.css'

function VerUsuario() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <p>Tipo de Sociedad: {user && user.tipo_sociedad}</p>
      <p>Tipo de Entidad: {user && user.tipo_entidad}</p>
      <p>Tipo de Documento: {user && user.tipo_documento}</p>
      <p>Documento: {user && user.documento}</p>
      <p>Nombres: {user && user.nombres}</p>
      <p>Apellidos: {user && user.apellidos}</p>
      <p>Correo: {user && user.correo}</p>
      <p>Dirección: {user && user.direccion}</p>
      <p>Barrio: {user && user.barrio}</p>
      <p>Teléfono: {user && user.telefono}</p>
      <p>Celular: {user && user.celular}</p>
      <p>Pais: {user && user.pais}</p>
      <p>Departamento: {user && user.departamento}</p>
      <p>Ciudad: {user && user.ciudad}</p>
      <p>Género: {user && user.genero}</p>
      <p>Estado: {user && user.estado == '1' || !user.estado ? ' Activo' : ' Bloqueado'}</p>
    </div>
  )
}

export default VerUsuario
