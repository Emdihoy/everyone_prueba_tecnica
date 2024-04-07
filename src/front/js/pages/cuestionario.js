import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import { LandingHeader } from '../pages/landingHeader'
import '../../styles/home.css'
import '../../styles/cuestionario.css'
import { Navigate } from "react-router-dom";


export const Cuestionario = () => {
  const { store, actions } = useContext(Context)
  {store.isRegistered === false ? <Navigate to="/" /> : null}

  
  
  useEffect(() => {
    actions.obtenerTodosUsuario(); 
  }, []);
  
  const id = store.usuarioId
  
  const [respuesta1, setRespuesta1] = useState('');
	const [respuesta2, setRespuesta2] = useState('');
	const [respuesta3, setRespuesta3] = useState('');
  
  return (
    <>
      <LandingHeader />
      <div className='flex-column main p-5'>
        <div className="contenedorPregunta form-floating mb-3">
          <input onChange={(e) => setRespuesta1(e.target.value)} type="email" className="inputPregunta form-control" id="floatingInput" placeholder="Como podria IVECO mejorar?"/>
          <label htmlFor="floatingInput">Como podria IVECO mejorar?</label>
        </div>
        <div className="contenedorPregunta form-floating mb-3">
          <input onChange={(e) => setRespuesta2(e.target.value)} type="text" className="inputPregunta form-control" id="floatingPassword" placeholder="Cual es el mejor camion de nuestra flota?"/>
          <label htmlFor="floatingPassword">Cual es el mejor camion de nuestra flota?</label>
        </div>
        <div className="contenedorPregunta form-floating mb-3">
          <input onClick={() => console.log(id)} onChange={(e) => setRespuesta3(e.target.value)} type="text" className="inputPregunta form-control" id="floatingPassword" placeholder="Cual es tu camion ideal?"/>
          <label htmlFor="floatingPassword">Cual es tu camion ideal?</label>
        </div>
        <div className="form-floating mb-3">
          <button className="botonCuestionario mb-3" type="button" onClick={() => actions.obtenerRespuestas(id, respuesta1, respuesta2, respuesta3)}>Enviar</button>
        </div>
      </div>
    {store.cuestionarioCompletado === true ? <Navigate to="/sorteo" /> : null}
    </>
  )
}
