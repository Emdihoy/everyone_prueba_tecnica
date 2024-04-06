import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../../styles/home.css'
import ivecoLogo from '../../img/ivecoLogo.png'
import banner_parallax from '../../img/banner_parallax.png'
import banner from '../../img/banner.png'

export const LandingHeader = () => {
	const { store, actions } = useContext(Context);

    return (
        <>
          <div className='d-block col-12'>
            <div className='ivecoLogo'>
              <img src={ivecoLogo} />
            </div>
            <div className='banner_parallax text-center'>
              <img className='bannerbg' src={banner_parallax} />
              <img className='banner' src={banner} />
            </div>
            <div className='text-center'>
              <h1 className="titulo display-2 h1"><strong>Ven a probar nuestros vehículos</strong></h1>
              <p className="titulo h4">
                Registra tus datos para reservar una prueba del vehiculo que te
                gustaria probar
              </p>
            </div>
          </div>
        </>
      )
    }
    