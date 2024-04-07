import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { LandingHeader } from '../pages/landingHeader'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


// import "../../styles/sorteo.css";

export const Sorteo = () => {
	const { store, actions } = useContext(Context);
    {store.cuestionarioCompletado === false ? <Navigate to="/" /> : null}


    const todosLosUsuarios = store.usuario

	const [usuarioGanador, setUsuarioGanador] = useState('');

   
      function iniciarSorteo() {
        if (!todosLosUsuarios || !todosLosUsuarios.length) {return null;}
        function tieneRespuesta(usuario) {
          return usuario.respuesta1 != null || usuario.respuesta2 != null || usuario.respuesta3 != null;
        }
        const usuariosConAlmenosUnaPregunta = todosLosUsuarios.filter(tieneRespuesta);
        if (usuariosConAlmenosUnaPregunta.length === 0) {return null;}
        const randomIndex = Math.floor(Math.random() * usuariosConAlmenosUnaPregunta.length);
        setUsuarioGanador(usuariosConAlmenosUnaPregunta[randomIndex]);
        console.log(usuarioGanador);
        return usuariosConAlmenosUnaPregunta[randomIndex];
      }
	return (
		<>
            <LandingHeader />
            <div className="container text-center">
                <button onClick={() => iniciarSorteo(todosLosUsuarios)} type="button" className="btn btn-primary"> Iniciar sorteo</button>
            </div>
            <div className="container text-center">
                <ul className="list-group m-5">
                    <li className="list-group-item"><strong>Nombre: </strong>{usuarioGanador.nombre}</li>
                    <li className="list-group-item"><strong>Correo: </strong> {usuarioGanador.correo}</li>
                    <li className="list-group-item"><strong>Como podria IVECO mejorar?: </strong> {usuarioGanador.respuesta1}</li>
                    <li className="list-group-item"><strong>Cual es el mejor camion de nuestra flota?: </strong>{usuarioGanador.respuesta2}</li>
                    <li className="list-group-item"><strong>Cual es tu camion ideal?: </strong>{usuarioGanador.respuesta3}</li>
                </ul>
            </div>
            <div className="container text-center mt-5 mb-5" >
                <Link to={"/adminPanel"}>
                    <button type="button" className="btn btn-primary">Soy administrador</button>
                </Link>
            </div>
		</>
	);
};