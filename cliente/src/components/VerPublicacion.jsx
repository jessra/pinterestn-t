import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function VerPublicacion() {
	return (
		<div className="contenedor-publicacion">
			<div className="d-flex align-items-center w-100 col-12">
				<div className="col-available">
					<button className="btn-icon">
						<FontAwesomeIcon icon="fa-solid fa-arrow-left" />
						<span className="px-2 d-none d-sm-inline">atrás</span>
					</button>
				</div>
				<div className="col-auto">
					<button className="btn-outline">
						<FontAwesomeIcon icon="fa-solid fa-pen" />
						<span className="px-2 d-none d-sm-inline">Editar</span>
					</button>
				</div>
				<div className="col-auto">
					<button className="btn-flat primario">
						<FontAwesomeIcon icon="fa-solid fa-heart" />
						<span className="px-2 d-none d-sm-inline">Favorito</span>
					</button>
				</div>
			</div>
			<div className="col-12 col-xl-5 p-2">
				<div className="contenedor-img">
					<img src="./src/imagenesTemporales/cyberpunk-edgerunners.jpg" alt="" />
					{/* <img src="./src/imagenesTemporales/phos.jpg" alt="" /> */}
				</div>
			</div>
			<div className="col-available col-xl-3 mt-2">
				<p className="titulo px-2">Borem ipsum</p>
				<p className="descripcion">
					Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
					molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
					accumsan.
				</p>
			</div>
		</div>
	);
}
