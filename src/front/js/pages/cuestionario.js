import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { LandingHeader } from '../pages/landingHeader'
import '../../styles/home.css'
import { Navigate } from "react-router-dom";


export const Cuestionario = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <LandingHeader />
      {store.isRegistered === false ? <Navigate to="/" /> : null}
    </>
  )
}
