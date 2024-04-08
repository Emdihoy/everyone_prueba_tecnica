const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      usuario: [],
      usuarioId: null,
      isRegistered: false,
      cuestionarioCompletado: false,
      isAdmin: false
    },
    actions: {
      registroAutomatico (nombre, correo, respuesta1, respuesta2, respuesta3) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: nombre,
            correo: correo,
            respuesta1: respuesta1,
            respuesta2: respuesta2,
            respuesta3: respuesta3
          })
        }
        const response = fetch(
          process.env.BACKEND_URL + '/api/registroAutomatico',
          requestOptions
        )
      },

      crearUsuario (nombre, correo) {
        if (nombre === '') {
          alert('Por favor, introduce tu nombre')
        } else if (correo === '') {
          alert('Por favor, introduce tu correo')
        } else {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nombre: nombre,
              correo: correo
            })
          }
          const response = fetch(
            process.env.BACKEND_URL + '/api/registro',
            requestOptions
          )
            .then(response => {
              console.log(response)
              console.log(response.status)
              if (response.status === 200) {
                alert('Registro exitoso')
                return response.json()
              } else {
                console.error('Error en el registro:', response.status)
                alert('Error al registrar usuario')
              }
            })
            .then(data => {
              if (data) {
                localStorage.setItem('ls_Id', data.id)
                localStorage.setItem('userAuth', true)
                setStore({
                  auth: true,
                  usuarioId: data.id,
                  isRegistered: true
                })
              }
            })
            .catch(error => {
              console.error('Error en la solicitud:', error)
            })
        }
      },

      obtenerRespuestas: (id, respuesta1, respuesta2, respuesta3) => {
        if (respuesta1 === '' && respuesta2 === '' && respuesta3 === '') {
          alert('Por favor, responde al menos una de las 3 preguntas')
        } else {
          const editOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              respuesta1: respuesta1,
              respuesta2: respuesta2,
              respuesta3: respuesta3
            })
          }
          fetch(
            process.env.BACKEND_URL + `/api/cuestionario/${id}`,
            editOptions
          )
            .then(response => response.json())
            .then(data => {
              console.log(`Cuestionario completado exitosamente: ${data}`)
              alert('Tus respuestas se han añadido correctamente')
            })
            .catch(error => {
              console.error('Error al añadir respuestas', error)
              alert('Error al añadir respuestas')
            })
          setStore({
            cuestionarioCompletado: true,
            isRegistered: false
          })
        }
      },

      obtenerTodosUsuario: () => {
        const requestOptions = {
          method: 'GET',
          headers: { 'content-type': 'application/json' }
        }
        fetch(process.env.BACKEND_URL + '/api/usuario', requestOptions)
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            setStore({ usuario: data })
          })
      },

      eliminarUsuario: id => {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' }
        }
        fetch(process.env.BACKEND_URL + `/api/usuario/${id}`, requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Error al eliminar fila ${id}`)
            }
            return response.json()
          })
          .then(data => {
            console.log(data)
          })
      }
    }
  }
}

export default getState
