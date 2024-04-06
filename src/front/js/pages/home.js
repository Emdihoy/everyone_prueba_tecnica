import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { Registro } from '../pages/registro'
import '../../styles/home.css'
import ivecoLogo from '../../img/ivecoLogo.png'
import banner_parallax from '../../img/banner_parallax.png'
import banner from '../../img/banner.png'

export const Home = () => {
  const { store, actions } = useContext(Context)

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

  return (
    <>
      <div className='d-block col-12'>
        <div className="ivecoLogo">
          <img src={ivecoLogo} />
        </div>
        <div className="banner_parallax text-center">
          <img className="bannerbg" src={banner_parallax} />
          <img className="banner" src={banner} />
        </div>
		<div className="text-center">
			<h1>Ven a probar nuestros vehiculos</h1>
			<p>Registra tus datos para reservar una prueba del vehiculo que te gustaria probar</p>
		</div>

      <Registro /> 
      </div>
      
    </>
  )
}
