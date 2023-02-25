export default function ContenedorImg({post, msg}) {
  if (post.length) {
    return (
      <div className="contenedor-galeria">
        {post.map((p) => (
          <div onClick={(e) => window.location.href = '/Image/' + p.idPub} key={p.idPub} className="contenedor-img col-5 col-md-3 col-lg-2">
            <img src={'../src/imagenesTemporales/' + p.img} alt="" />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="contenedor-galeria">
        <h2>{msg}</h2>
      </div>
    );
  }
}