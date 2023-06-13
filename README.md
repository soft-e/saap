# saap
sistema de apoyo a la administracion de parqueos

# para obtener los datos del usuario logeado desde cualquier pagina
1.- import el contexto de sesion:

import { SessionContext } from "../context/context-rodrigo/SessionContext";

2.- aplicar destructuracion dentro la funcion principal de la pagina (siempre al incio):

const { isLoggedIn, user, login, logout } = useContext(SessionContext);

3.- cada vez q se necesita alguna data del usuario solo usar la palabra: 
  user
user ya contendra toda la data y si se requiere algun dato en especifico por ejemplo el nombre solo escribir:
  user.nombre
