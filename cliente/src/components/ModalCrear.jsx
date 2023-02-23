import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CrearPublicacion(mostrarModal) {
	return (
		<div className="modal-bg">
      <div className="modal-container">
        <div className="modal">
          <div className="contenedor-img">
            <img src="./src/imagenesTemporales/photo_2023-01-27_11-16-59.jpg" alt="" />
            <button className="btn-flat secundario btn-absolute">Cambiar</button>
          </div>
          <div className="d-flex flex-column p-4">
            <div className="grupo-inputs">
              <input type="text" id="titulo" />
              <label htmlFor="titulo">Titulo</label>
            </div>
            <div className="grupo-inputs">
              <textarea id="descripcion" cols="30" rows="10"></textarea>
              <label htmlFor="descripcion">Descripción</label>
            </div>
            <div className="d-flex align-items-end col-available">
              <button className="btn-outline">Cancelar</button>
              <button className="btn-flat primario">Guardar</button>
            </div>
          </div>
          <button className='btn-icon align-self-start'>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
		</div>
	);
}
