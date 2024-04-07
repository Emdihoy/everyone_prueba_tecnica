import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'

import '../../styles/registro.css'

export const Registro = () => {
  const { store, actions } = useContext(Context)

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

  return (
    <>
      <div className='main col-12 d-flex justify-content-center'>
        <form className='g-3 form-group'>
          <div className='form-group'>
            <label className='visually-hidden'></label>
            <input
              onChange={e => setNombre(e.target.value)}
              type='text'
              className='inputRegistro form-control'
              id='exampleFormControlInput1'
              placeholder='Escribe tu nombre (obligatorio)'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='staticEmail2' className='visually-hidden'></label>
            <input
              onChange={e => setCorreo(e.target.value)}
              type='email'
              className='inputRegistro form-control'
              placeholder='Correo (obligatorio)'
            />
          </div>
          <label htmlFor='staticEmail2' className='visually-hidden'>
            Apellidos
          </label>
          <input
            type='email'
            className='inputRegistro form-control'
            placeholder='Apellidos'
          />
          <label htmlFor='staticEmail2' className='visually-hidden'>
            Teléfono
          </label>
          <input
            type='email'
            className='inputRegistro form-control'
            placeholder='Teléfono'
          />
          <div className='dropdown'>
            <label htmlFor='staticEmail2' className='visually-hidden'>
              Vehiculo que desea probar
            </label>
            <button
              value=''
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              className='desplegable btn dropdown-toggle text-start'
              placeholder='Vehículo que desea probar'
            >
              Vehículo que desea probar
            </button>
            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO Daily
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO Eurocargo
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO S-Way
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO T-Way
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO Stralis
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  IVECO Trakker
                </a>
              </li>
            </ul>
          </div>
          <label htmlFor='staticEmail2' className='visually-hidden'>
            Día de prueba
          </label>
          <input
            type='email'
            className='inputRegistro form-control'
            placeholder='Día de prueba'
          />
          <label htmlFor='staticEmail2' className='visually-hidden'>
            Contraseña
          </label>
          <input
            type='email'
            className='inputRegistro form-control'
            placeholder='Contraseña'
          />
          <div className='form-check'>
            <input
              required='required'
              type='radio'
              className='form-check-input'
              id='validationFormCheck2'
              name='radio-stacked'
            />
            <label className='form-check-label ' htmlFor='validationFormCheck2'>
              He leído y acepto las políticas de privacidad
            </label>
          </div>
          <button
            className='botonFormulario mb-3'
            type='button'
            onClick={() => actions.crearUsuario(nombre, correo)}
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </>
  )
}
