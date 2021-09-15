import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from './components/Home/Home'
import ChangePass from './components/ChangePass'
import RecoverPass from './components/RecoverPass'
import DashBoard from './components/DashBoard/DashBoard'


function App() {
  
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cambiar-contrasena'>
          <ChangePass />
        </Route>
        <Route path='/recuperar-contrasena'>
          <RecoverPass />
        </Route>
        <Route path='/inicio'>
          <DashBoard />
        </Route>
      </Switch>
    </>
  )
}



export default App

