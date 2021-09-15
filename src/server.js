const express = require('express')
const cors = require('cors')

const app = express()

let usuarios = [
  {
    "id": 0,
    "tipo_sociedad": "N-Persona Natural",
    "tipo_entidad": "NINGUNO",
    "tipo_documento": "1-Cédula de ciudadanía",
    "documento": "71225502",
    "nombres": "Albert",
    "apellidos": "Valbuena Restrepo",
    "correo": "lavalbuena357@gmail.com",
    "direccion": "cl 59a #68-62",
    "barrio": "Trapiche",
    "telefono": "3206172165",
    "celular": "3206172165",
    "pais": "CO",
    "departamento": "05-ANTIOQUIA",
    "ciudad": "05001-MEDELLÍN",
    "genero": "m",
    "estado": "1",
    "data": {
      "perfil": "admin",
      "usuario": "71225502",
      "contra": "123456"
    }
  },
  {
    "id": 1,
    "tipo_sociedad": "N-Persona Natural",
    "tipo_entidad": "NINGUNO",
    "tipo_documento": "1-Cédula de ciudadanía",
    "documento": "925456182",
    "nombres": "Julio Cesar",
    "apellidos": "Jimenez Meza",
    "correo": "julio.zaor@gmail.com",
    "direccion": "cra 47 #112-51",
    "barrio": "La Candelaria",
    "telefono": "2722196",
    "celular": "312313456",
    "pais": "CO",
    "departamento": "05-ANTIOQUIA",
    "ciudad": "05001-MEDELLÍN",
    "genero": "m",
    "estado": "1",
    "data": {
      "perfil": "admin",
      "usuario": "925456182",
      "contra": "123456"
    }
  },
  {
    "id": 2,
    "tipo_sociedad": "N-Persona Natural",
    "tipo_entidad": "NINGUNO",
    "tipo_documento": "1-Cédula de ciudadanía",
    "documento": "952457654",
    "nombres": "Jhon",
    "apellidos": "Lennon",
    "correo": "j.lennon@gmail.com",
    "direccion": "cra 47 #112-51",
    "barrio": "San Javier",
    "telefono": "2722196",
    "celular": "312242456",
    "pais": "CO",
    "departamento": "05-ANTIOQUIA",
    "ciudad": "05001-MEDELLÍN",
    "genero": "m",
    "estado": "0"
  },
  {
    "id": 3,
    "tipo_sociedad": "N-Persona Natural",
    "tipo_entidad": "NINGUNO",
    "tipo_documento": "1-Cédula de ciudadanía",
    "documento": "952457654",
    "nombres": "Ringo",
    "apellidos": "Starr",
    "correo": "r.starr@gmail.com",
    "direccion": "cra 47 #112-51",
    "barrio": "San Javier",
    "telefono": "2722196",
    "celular": "312244444",
    "pais": "CO",
    "departamento": "05-ANTIOQUIA",
    "ciudad": "05001-MEDELLÍN",
    "genero": "m",
    "estado": "0"
  },
  {
    "id": 4,
    "tipo_sociedad": "N-Persona Natural",
    "tipo_entidad": "NINGUNO",
    "tipo_documento": "1-Cédula de ciudadanía",
    "documento": "952457654",
    "nombres": "Paul",
    "apellidos": "McCartney",
    "correo": "p.maccartney@gmail.com",
    "direccion": "cra 57 #122-51",
    "barrio": "San Javier",
    "telefono": "2722196",
    "celular": "3122555555",
    "pais": "CO",
    "departamento": "05-ANTIOQUIA",
    "ciudad": "05001-MEDELLÍN",
    "genero": "m",
    "estado": "0"
  },
]

app.use(cors())
app.use(express.json())

app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios)
})

app.listen(3001, () => {
  console.log('server running on port 3001')
})