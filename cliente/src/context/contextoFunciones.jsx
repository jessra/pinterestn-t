import { createContext, useState, useEffect } from 'react';
import http from "../http-common";
export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [cat, setCat] = useState([]);
  const [activo, setActivo] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect((e) => {
    listaUsurios()
    listaPost()
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

  function crearCuenta (user, pass) {
    if (user && pass) {
      const data = {
        name: user,
        pass: pass
      }
      http
      .post('/aggusers', data)
      .then(response => {
        console.log(response.data)
        setActivo(response.data)
        setUsers(listaUsurios)
        window.location.href = '/';
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  function iniciarCuenta (user, pass) {
    let men = 'Verifique sus datos';
    let r = false
    if (user && pass) {
      console.log(user)
      console.log(pass)
      const user2 = users
      console.log(users)
      user2.forEach((u) => {
        if (u.name == user) {
          if (u.pass == pass) {
            men = 'Sesión iniciada'
            r = true
            setActivo(u)
            window.location.href = '/';
          }
        }
      })
    }
    console.log(men)
  }

  return <Contexto_Funciones.Provider value={{
    crearCuenta,
    iniciarCuenta,
    modal,
    setModal,
    activo,
    listaPost,
    post,
    cat,
    setActivo,
    listaUsurios
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}