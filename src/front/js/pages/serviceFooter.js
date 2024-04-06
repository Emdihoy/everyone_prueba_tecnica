import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import '../../styles/home.css'
import configurador from '../../img/configurador.png'
import agente from '../../img/agente.png'
import mapa from '../../img/mapa.png'
// import hover_mapa from '../../img/hover_mapa.png'

export const ServiceFooter = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
        <div className="container text-center">
          <div className="row contenedorServicios">
            <div className="col-lg-4 col-md-6 col-sm-12 mapaContainer">
              <img className="mapa" src={mapa}></img>
              {/* <img className="mapaHover" src={hover_mapa}></img> */}
              <h3>Encuentra nuestros consesionarios</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 agente">
              <img src={agente}></img>
              <h3>¿Alguna duda?</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 configurador">
              <img src={configurador}></img>
              <h3>Configura tu vehículo</h3>
            </div>
          </div>
        </div>
    </>
  )
}