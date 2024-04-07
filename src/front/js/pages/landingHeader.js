import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

import ivecoLogo from '../../img/ivecoLogo.png'
import banner_parallax from '../../img/banner_parallax.png'
import banner from '../../img/banner.png'

import '../../styles/landingheader.css'

export const LandingHeader = () => {
  const { store, actions } = useContext(Context)

  

  return (
    <>
      <div className='d-block col-12'>
        <div className='ivecoLogo'>
          <Link to={'/'}>
            <img src={ivecoLogo} />
          </Link>
        </div>
        <div className='banner_parallax text-center'>
          <img className='bannerbg' src={banner_parallax} />
          <img className='banner' src={banner} />
        </div>
        <div className='text-center'>
          {store.isRegistered === true ? (
            <h1 className='titulo'>
              <strong>Responde estas preguntas y gana</strong>
            </h1>
          ) : (
            <>
              <h1 className='titulo'>
               Ven a probar nuestros vehículos
              </h1>
              <div className="conenedorSubtitulo">
                <p className='subTitulo'>
                  Registra tus datos para reservar una prueba<br></br>del vehículo que
                  te gustaria probar.
                </p>
              </div>
            </>
          )}
          {store.isRegistered === true &&
          store.cuestionarioCompletado === true ? (
            <h1 className='titulo'>
              <strong>Participa en el sorteo y gana</strong>
            </h1>
          ) : null}
        </div>
      </div>
    </>
  )
}
