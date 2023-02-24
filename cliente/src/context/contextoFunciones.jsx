import { createContext, useState, useEffect } from 'react';
import http from "../http-common";
export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [postSelect, setPostSelect] = useState([])
  const [postFav, setPostFav] = useState([])
  const [cat, setCat] = useState([]);
  const [activo, setActivo] = useState({user: {img: '', name: ''}});
  const [modal, setModal] = useState(false);
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[3]

  useEffect((e) => {
    if (route == 'Perfil') {
      listaPostUser()
    } else {
      listaPost()
    }
    listaActivo()
    listaUsurios()
    listaCategorias()
  }, [])

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
          'Content-Type': 'multipart/form-data',
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
              }
            })
            .catch((error) => {
              console.log('Error:', error);
            });
          }
        }
      })
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
      setPostSelect(data)
    })
    .catch(e => {
      console.log(e)
      return {error: 'error'}
    })
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
    postFav,
    listaActivo,
    listaPostUser
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}