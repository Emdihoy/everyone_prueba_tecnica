const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [],
      usuario: [],
      usuarioId: null,
      isRegistered: false,
      cuestionarioCompletado: false
    },
    actions: {
      
      crearUsuario (nombre, correo){
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
            nombre: nombre,
            correo: correo
					})
				};
				const response = fetch(process.env.BACKEND_URL + "/api/registro", requestOptions)
				.then(response => {
				  console.log(response);
				  console.log(response.status);
				  if (response.status === 200) {
					alert("Registro exitoso");
					return response.json();
				  } else {
					console.error("Error en el registro:", response.status);
					alert("Error al registrar usuario")
				  }
				})
				.then(data => {
				  if (data) {
					localStorage.setItem("ls_Id", data.id);
					localStorage.setItem("userAuth", true);
					setStore({
					  auth: true,
					  usuarioId: data.id, 
            isRegistered: true
					});
				  }
				})
				.catch(error => {
				  console.error("Error en la solicitud:", error);
				});
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
        setStore({
          cuestionarioCompletado: true
        });
			},

      obtenerTodosUsuario: () => {
				const requestOptions = {
					method: 'GET',
					headers: { "content-type": "application/json" },
				};
				fetch(process.env.BACKEND_URL + "/api/usuario", requestOptions)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ usuario: data })
					}
					)
			},

      // iniciarSorteo (usuario) {
      //   // Check if the array is empty
      //   if (!usuario || !usuario.length) {
      //     return null; // Return null if the array is empty
      //   }
      
      //   // Get a random index between 0 (inclusive) and array.length (exclusive)
      //   const randomIndex = Math.floor(Math.random() * usuario.length);
      
      //   // Return the object at the random index
      //   console.log(usuario[randomIndex])
      //   return usuario[randomIndex];
      // },



    }
  }
}

export default getState
