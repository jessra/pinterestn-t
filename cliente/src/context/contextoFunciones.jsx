import { createContext, useState, useEffect } from 'react';
import http from "../http-common";
export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [postSelect, setPostSelect] = useState([])
  const [cat, setCat] = useState([]);
  const [activo, setActivo] = useState({user: {img: '', name: ''}});
  const [modal, setModal] = useState(false);
	const [headE, setHeadE] = useState("");
	const [descriptionE, setDescriptionE] = useState("");
	const [categoryE, setCategoryE] = useState("");
	const [imgE, setImgE] = useState({ preview: "", data: "" });
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[3]

  useEffect((e) => {
    if (route == 'Perfil') {
      listaPostUser()
    } else if (route == 'Favoritos') {
      listarFavs()
    } else {
      listaPost()
    }
    listaActivo()
    listaUsurios()
    listaCategorias()
  }, [])

  
  function Alert(men, tipo) {
    if (tipo) {
      document.getElementById('notificacion').classList.add('color-success');
    } else {
      document.getElementById('notificacion').classList.add('color-error');
    }

    document.getElementById('notificacion').innerHTML = '';
    document.getElementById('notificacion').innerHTML +=
      `
    <i class="fa-solid fa-circle-check"></i>
    <p class="m-0 px-2">` +
      men +
      `</p>`;
    setTimeout(() => {
      if (tipo) {
        document.getElementById('notificacion').classList.remove('color-success');
      } else {
        document.getElementById('notificacion').classList.remove('color-error');
      }
      document.getElementById('notificacion').innerHTML = '';
    }, 5000);
  }
  function listaPost () {
    let dataPost = []
    http
    .get('/publications')
    .then(response => {
      dataPost = response.data
      setPost(dataPost.reverse())
    })
    .catch(e => {
      console.log(e)
    })
    setPost(dataPost)
    listaCategorias()
  }

  async function listaPostUser () {
    try {
      let dataPost = []
      const dataT = await JSON.parse(localStorage.getItem('pinterestnt'))
      const token = {
        headers: {
          authorization: `Bearer ${dataT.token}`,
          'Content-Type': 'application/json',
        },
      };
      await http
      .post('/perfil', {}, token)
      .then(response => {
        dataPost = response.data
        setPost(dataPost.reverse())
      })
      .catch(e => {
        console.log(e)
      })
      setPost(dataPost)
  } catch {
    console.log('Ocurrio un error')
  }
  }
  async function listarFavs () {
    try {
      let dataFav = []
      const dataT = await JSON.parse(localStorage.getItem('pinterestnt'))
      const token = {
        headers: {
          authorization: `Bearer ${dataT.token}`,
          'Content-Type': 'application/json',
        },
      };
      http
      .post('/favoritos', {},token)
      .then(response => {
        dataFav = response.data
        setPost(dataFav)
      })
      .catch(e => {
        console.log(e)
      })
      setPost(dataFav)
  } catch {
    console.log('Ocurrio un error')
  }
  }
  function listaUsurios () {
    let dataUsers = []
    http
    .get('/users')
    .then(response => {
      dataUsers = response.data
      setUsers(dataUsers)
    })
    .catch(e => {
      console.log(e)
    })
    setUsers(dataUsers)
  }
  function listaCategorias () {
    let dataCat = []
    http
    .get('/category')
    .then(response => {
      dataCat = response.data
      setCat(dataCat)
    })
    .catch(e => {
      console.log(e)
    })
    setCat(dataCat)
  }
  function listaActivo () {
    if (localStorage.getItem('pinterestnt') != null){
      const dataT = JSON.parse(localStorage.getItem('pinterestnt'))
      setActivo(dataT)
    } 
  }
  function iniciarCuenta (user, pass) {
    if (user && pass) {
      const user2 = users
      user2.forEach((u) => {
        if (u.name == user) {
          if (u.pass == pass) {
            http
            .post("/token", {idUser: u.idUser})
            .then((response) => {
              if (!response.data.err) {
                const data = {
                  user: u,
                  token: response.data.token
                }
                localStorage.setItem('pinterestnt', JSON.stringify(data));
                listaActivo()
                window.location.href = '/';
              } else {
                console.log(response.data.err)
                Alert('Ha sucedido un problema', false)
              }
            })
            .catch((error) => {
              console.log('Error:', error);
              Alert('Ha sucedido un problema', false)
            });
          }
        }
      })
    } else {
      Alert('Por favor rellene todos los campos', false)
    }
  }

  function verPost (id) {
    const data = {
      id
    }
    http
    .post('/publication', data)
    .then(response => {
      const data = response.data
      setCategoryE(data.cat.nameCat)
      setHeadE(data.pub.head)
      setPostSelect(data)
      setDescriptionE(data.pub.description)
      setImgE({preview: `../src/imagenesTemporales/${data.pub.img}`, data: ''})
    })
    .catch(e => {
      console.log(e)
      return {error: 'error'}
    })
  }

  function cerrarSesion() {
    localStorage.removeItem('pinterestnt');
    window.location.href = '/LogIn';
  }

  function botonFavorito(pub) {
    const token = {
      headers: {
        authorization: `Bearer ${activo.token}`,
        'Content-Type': 'application/json',
      },
    };
    http
    .post('/favorito', {pub: pub, user: activo.user.idUser}, token)
    .then(response => {
			Alert(response.data.msg, true);
    })
    .catch(e => {
      console.log(e)
      return {error: 'error'}
    })
  }

  function eliminarPost(id, img) {
    const token = {
      headers: {
        authorization: `Bearer ${activo.token}`,
        'Content-Type': 'application/json',
      },
    };
    console.log(activo.token)
    http
    .delete(`/eliminar/${id}/${img}`, token)
    .then(response => {
      listaPost()
      Alert('Se ha eliminado la publicación')
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    })
    .catch(e => {
      console.log(e)
      return {error: 'error'}
    })
  }

  function filtrar (cat, autor) {
    const token = {
      headers: {
        authorization: `Bearer ${activo.token}`,
        'Content-Type': 'application/json',
      },
    };
    if (cat) {
      http
      .post(`/filpubcat`, {cat: cat, autor: autor}, token)
      .then(response => {
        setPost(response.data.reverse())
      })
      .catch(e => {
        console.log(e)
      })
    } else if (autor && !cat) {
      http
      .post(`/filpubautor`, {autor: autor}, token)
      .then(response => {
        setPost(response.data.reverse())
      })
      .catch(e => {
        console.log(e)
      })
    } else {
      listaPost()
    }
  }

  return <Contexto_Funciones.Provider value={{
    iniciarCuenta,
    modal,
    setModal,
    activo,
    listaPost,
    post,
    cat,
    setActivo,
    listaUsurios,
    verPost,
    postSelect,
    listaActivo,
    listaPostUser,
    cerrarSesion,
    botonFavorito,
    eliminarPost,
    filtrar,
    headE, setHeadE,
    descriptionE, setDescriptionE,
    categoryE, setCategoryE,
    imgE, setImgE,
    Alert
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}