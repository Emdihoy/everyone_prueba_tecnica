import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');

	return (
		<>
			<form className="col g-3">
				<div className="col-auto">
					<label htmlFor="text" className="visually-hidden">Nombre</label>
					<input onChange={(e) =>setNombre((e).target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escribe tu nombre" />
				</div>
				<div className="col-auto">
					<label htmlFor="staticEmail2" className="visually-hidden">Correo</label>
					<input onChange={(e) =>setCorreo((e).target.value)} type="email" className="form-control" placeholder="Correo" />
				</div>
				<div className="col-auto">
					<button className="btn btn-primary mb-3" type="button" onClick={() => actions.crearUsuario(nombre, correo)}>Crear cuenta</button>
				</div>
			</form>
		</>
	);
};