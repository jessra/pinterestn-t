import { useContext, useEffect, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function VerPublicacion() {
	const { verPost, postSelect, botonFavorito } = useContext(Contexto_Funciones);
	const [editar, setEditar] = useState(false);
	const vistaActual = window.location.href;
	const route = vistaActual.split("/")[4];
	if (route) {
		useEffect((e) => {
			verPost(route);
		}, []);
		if (postSelect.pub) {
			if (editar) {
				return (
					<div className="contenedor-publicacion flip-horizontal-top">
						<div className="d-flex align-items-center w-100 col-12">
							<div className="col-available">
								<button className="btn-icon">
									<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
									<span
										className="px-2 d-none d-sm-inline"
										onClick={(e) => (window.location.href = document.referrer)}
									>
										Atrás
									</span>
								</button>
							</div>
							<div className="col-auto">
								<button className="btn-outline">
									<FontAwesomeIcon icon="fa-solid fa-trash" />
									<span className="px-2 d-none d-sm-inline">Eliminar</span>
								</button>
							</div>
							<div className="col-auto">
								<button className="btn-outline" onClick={() => setEditar(false)}>
									<FontAwesomeIcon icon="fa-solid fa-times" />
									<span className="px-2 d-none d-sm-inline">Cancelar</span>
								</button>
							</div>
							<div className="col-auto">
								<button className="btn-flat primario animacion-rotar">
									<FontAwesomeIcon icon="fa-solid fa-check" />
									<span className="px-2 d-none d-sm-inline">Guardar</span>
								</button>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-7 col-xl-5">
							<div className="contenedor-img">
								<img src={"../src/imagenesTemporales/" + postSelect.pub.img} alt="" />
							</div>
						</div>
						<div className="col-sm-6 col-lg-5 col-xl-3 flip-scale-up">
							<div className="grupo-inputs file">
								<input
									type="file"
									id="image"
									name="image"
									accept=".jpg, .jpeg, .png"
									className="wh-100"
									// onChange={cambioImg}
									required
								/>
								<label htmlFor="image">
									<FontAwesomeIcon icon="fa-solid fa-upload" />
									<span className="px-2">Subir imagen</span>
								</label>
							</div>
							<div className="grupo-inputs">
								<input
									type="text"
									id="titulo"
									// value={head}
									// onChange={(e) => setHead(e.target.value)}
								/>
								<label htmlFor="titulo">Titulo</label>
							</div>
							<div className="grupo-inputs">
								<input
									type="text"
									multiple
									id="categoria"
									list="categorias"
									// value={category}
									// onChange={(e) => setCategory(e.target.value.toUpperCase())}
								/>
								<label htmlFor="categoria">Categoría</label>
								{/* <datalist id="categorias">
									{cat.map((c) => (
										<option key={c.idCat} value={c.nameCat}>
											{c.nameCat}
										</option>
									))}
								</datalist> */}
							</div>
							<div className="grupo-inputs">
								<textarea
									id="descripcion"
									cols="30"
									rows="10"
									// value={description}
									// onChange={(e) => setDescription(e.target.value)}
								></textarea>
								<label htmlFor="descripcion">Descripción</label>
							</div>
						</div>
					</div>
				);
			}
			return (
				<div className="contenedor-publicacion animacion-slide-bottom">
					<div className="d-flex align-items-center w-100 col-12">
						<div className="col-available">
							<button className="btn-icon">
								<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
								<span
									className="px-2 d-none d-sm-inline"
									onClick={(e) => (window.location.href = document.referrer)}
								>
									Atrás
								</span>
							</button>
						</div>
						<div className="col-auto">
							<button className="btn-outline" onClick={() => setEditar(true)}>
								<FontAwesomeIcon icon="fa-solid fa-pen" />
								<span className="px-2 d-none d-sm-inline">Editar</span>
							</button>
						</div>
						<div className="col-auto">
							<button onClick={(e) => botonFavorito(postSelect.pub.idPub)} className="btn-flat primario animacion-rotar">
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
