import { useContext, useEffect, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function VerPublicacion() {
	const { verPost, postSelect } = useContext(Contexto_Funciones);
	const vistaActual = window.location.href;
	const route = vistaActual.split("/")[4];
	if (route) {
		useEffect((e) => {
			verPost(route);
		}, []);
		if (postSelect.pub) {
			return (
				<div className="contenedor-publicacion">
					<div className="d-flex align-items-center w-100 col-12">
						<div className="col-available">
							<button className="btn-icon">
								<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
								<span
									className="px-2 d-none d-sm-inline"
									onClick={(e) => (window.location.href = document.referrer)}
								>
									atrás
								</span>
							</button>
						</div>
						<div className="col-auto">
							<button className="btn-outline">
								<FontAwesomeIcon icon="fa-solid fa-pen" />
								<span className="px-2 d-none d-sm-inline">Editar</span>
							</button>
						</div>
						<div className="col-auto">
							<button className="btn-flat primario animacion-rotar">
								<FontAwesomeIcon icon="fa-solid fa-heart" />
								<span className="px-2 d-none d-sm-inline">Favorito</span>
							</button>
						</div>
					</div>
					<div className="col-12 col-xl-5 p-2">
						<div className="contenedor-img">
							<img src={"../src/imagenesTemporales/" + postSelect.pub.img} alt="" />
						</div>
					</div>
					<div className="col-available col-xl-3 mt-2 px-2">
						<p className="titulo">{postSelect.pub.head}</p>
						<p className="categoria">{postSelect.cat.nameCat}</p>
						<p> {postSelect.user.name}</p>
						<p className="descripcion">{postSelect.pub.description}</p>
					</div>
				</div>
			);
		}
	}
}
