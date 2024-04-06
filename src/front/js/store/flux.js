const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [],
      usuario: []
    },
    actions: {
      crearUsuario: async (nombre, correo) => {
        try {
          if (nombre === "") {
			alert ("Por favor, introduce tu nombre")
		  }
          else if (correo === "") {
			alert ("Por favor, introduce tu correo")
		  }
			else{
            const response = await fetch(
              process.env.BACKEND_URL + '/api/registro',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  nombre: nombre,
                  correo: correo
                })
              }
            )
          }
        } catch (error) {
          console.error('Error al crear usuario:', error)
          alert('Error al crear usuario. Intentalo nuevamente.')
        }
      }
    }
  }
}

export default getState
