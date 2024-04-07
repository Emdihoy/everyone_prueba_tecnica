import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { Registro } from '../pages/registro'
import { LandingHeader } from '../pages/landingHeader'
import { ServiceFooter } from '../pages/serviceFooter'
import { Navigate } from 'react-router-dom'

import '../../styles/landingheader.css'

export const Home = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <LandingHeader />
      {store.isRegistered === true ? (
        <Navigate to='/cuestionario' />
      ) : (
        <Registro />
      )}
      <ServiceFooter />
    </>
  )
}
