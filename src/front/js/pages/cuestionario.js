import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { LandingHeader } from '../pages/landingHeader'
import '../../styles/home.css'
import '../../styles/cuestionario.css'
import { Navigate } from "react-router-dom";


export const Cuestionario = () => {
  const { store, actions } = useContext(Context)
  {store.isRegistered === false ? <Navigate to="/" /> : null}

  const [respuesta1, setRespuesta1] = useState('');
	const [respuesta2, setRespuesta2] = useState('');
	const [respuesta3, setRespuesta3] = useState('');

  return (
    <>
      <LandingHeader />
      <div className='flex-column main p-5'>
        <div className="contenedorPregunta form-floating mb-3">
          <input type="email" className="inputPregunta form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Como podria IVECO mejorar?</label>
        </div>
        <div className="contenedorPregunta form-floating mb-3">
          <input type="text" className="inputPregunta form-control" id="floatingPassword" placeholder="Cual es tu camion ideal?"/>
          <label for="floatingPassword">Cual es el mejor camion de nuestra flota?</label>
        </div>
        <div className="contenedorPregunta form-floating mb-3">
          <input type="text" className="inputPregunta form-control" id="floatingPassword" placeholder="Cual es tu camion ideal?"/>
          <label for="floatingPassword">Cual es tu camion ideal?</label>
        </div>
        <div className="form-floating mb-3">
          <button className="botonCuestionario mb-3" type="button" onClick={() => actions.crearUsuario(nombre, correo)}>Enviar</button>
        </div>
      </div>
    </>
  )
}
