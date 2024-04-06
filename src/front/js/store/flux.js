const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [],
      usuario: [],
      isRegistered: true
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
        setStore({ isRegistered: true })
          }
        } catch (error) {
          console.error('Error al crear usuario:', error)
          alert('Error al crear usuario. Intentalo nuevamente.')
        }
      },

      obtenerRespuestas: (id, respuesta1, respuesta2, respuesta3) => {
				const editOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', },
				body: JSON.stringify({
					"respuesta1": respuesta1,
					"respuesta2": respuesta2,
					"respuesta3": respuesta3,
				}),
			};
				fetch(process.env.BACKEND_URL + `/api/cuestionario/${id}`,editOptions)
				.then(response => response.json())
				.then(data => {
					console.log(`Cuestionario completado exitosamente: ${data}`);
					alert("Tus respuestas se han añadido correctamente");
				})
				.catch(error => {
					console.error('Error al añadir respuestas', error);
					alert("Error al añadir respuestas");
				});
			},




    }
  }
}

export default getState
