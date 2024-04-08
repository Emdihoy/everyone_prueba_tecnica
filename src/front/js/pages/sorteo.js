import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import { LandingHeader } from '../pages/landingHeader'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import "../../styles/sorteo.css";

export const Sorteo = () => {
  const { store, actions } = useContext(Context)

  function descartaBooleans(){
    store.cuestionarioCompletado = false; 
    store.isRegistered = false;
    store.isAdmin = true;
  }

  useEffect(() => {
    actions.obtenerTodosUsuario()
  }, [todosLosUsuarios])

  const todosLosUsuarios = store.usuario

  const [usuarioGanador, setUsuarioGanador] = useState('')

  function iniciarSorteo () {
    if (!todosLosUsuarios || !todosLosUsuarios.length) {
      return null
    }
    function tieneRespuesta (usuario) {
      return (
        usuario.respuesta1 != null ||
        usuario.respuesta2 != null ||
        usuario.respuesta3 != null
      )
    }
    const usuariosConAlmenosUnaPregunta =
      todosLosUsuarios.filter(tieneRespuesta)
    if (usuariosConAlmenosUnaPregunta.length === 0) {
      return null
    }
    const randomIndex = Math.floor(
      Math.random() * usuariosConAlmenosUnaPregunta.length
    )
    setUsuarioGanador(usuariosConAlmenosUnaPregunta[randomIndex])
    console.log(usuarioGanador)
    return usuariosConAlmenosUnaPregunta[randomIndex]
  }
  return (
    <>
      <LandingHeader />
      {store.cuestionarioCompletado === false ? <Navigate to='/cuestionario' /> : null}
      <div className='container text-center px-5'>
        <button
          onClick={() => iniciarSorteo(todosLosUsuarios)}
          type='button'
          className='btn btn-primary'
        >
          Iniciar sorteo
        </button>
      </div>
      <div className='cartaSorteo'>
        <ul className='list-group m-5'>
          <li className='list-group-item'>
            <strong>Nombre: </strong><br />
            {usuarioGanador.nombre}
          </li>
          <li className='list-group-item'>
            <strong>Correo: </strong><br /> {usuarioGanador.correo}
          </li>
          <li className='list-group-item'>
            <strong>¿Cómo podría IVECO mejorar?: </strong><br />
            {usuarioGanador.respuesta1}
          </li>
          <li className='list-group-item'>
            <strong>¿Eres empresario?: </strong><br />
            {usuarioGanador.respuesta2}
          </li>
          <li className='list-group-item'>
            <strong>¿Necesitas una flota?: </strong><br />
            {usuarioGanador.respuesta3}
          </li>
        </ul>
      </div>
      <div className='container text-center mt-5 mb-5'>
        <Link to={'/adminPanel'}>
          <button onClick={() =>descartaBooleans()}
            type='button' className='btn btn-danger mb-5'>
            Soy administrador
          </button>
        </Link>
      </div>
    </>
  )
}
