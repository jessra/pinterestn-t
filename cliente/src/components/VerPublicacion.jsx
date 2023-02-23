import { useContext, useEffect, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function CrearPublicacion() {
	const { verPost, postSelect } = useContext(Contexto_Funciones);
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[4]
	if (route) {
		useEffect((e) => {
			verPost(route)
		}, [])
		return (
			<div className="d-flex justify-center">
				<div className="contenedor-img">
					<img src={'../src/imagenesTemporales/' + postSelect.img} alt="" />
				</div>
				<div className="d-flex flex-column col-5 p-4">
					<p className="titulo">{postSelect.head}</p>
					<p className="descripcion">
						{postSelect.description}
					</p>
					<p> {postSelect.autor}</p>
					<div className="d-flex align-items-end col-available">
						<button className="btn-outline">Editar</button>
						<button className="btn-outline">Eliminar</button>
						<button className="btn-flat primario">Favorito</button>
					</div>
				</div>
			</div>
		);
	}
}
