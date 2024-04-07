import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import { LandingHeader } from '../pages/landingHeader'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const AdminPanel = () => {
  const { store, actions } = useContext(Context)
  const todosLosUsuarios = store.usuario

  useEffect(() => {
    actions.obtenerTodosUsuario()
  }, [todosLosUsuarios])

  return (
    <>
      <LandingHeader />
      <div className='container text-center p-5'>
        <table className='table table-light table-striped'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Correo</th>
              <th scope='col'>fecha de registro</th>
              <th scope='col'>¿Cómo podría IVECO mejorar?</th>
              <th scope='col'>¿Eres empresario?</th>
              <th scope='col'>¿Necesitas una flota?</th>
              <th scope='col'>Fecha de cuestionario</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {todosLosUsuarios.map((item, index) => (
              <tr>
                <th key={index} scope='row'>
                  {item.id}
                </th>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.fecha_de_registro}</td>
                <td>{item.respuesta1}</td>
                <td>{item.respuesta2}</td>
                <td>{item.respuesta3}</td>
                <td>{item.fecha_de_cuestionario}</td>
                <td key={item.id[index]}>
                  <button
                    onClick={() => actions.eliminarUsuario(item.id)}
                    className='btn'
                    style={{ color: 'red' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
