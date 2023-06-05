function UsuarioCard(user){
  return <div>
    <p>{user.nombre}</p>
    <p>{user.apellido_paterno}</p>
    <p>{user.apellido_materno}</p>
    <p>{user.ci}</p>
    <p>{user.telefono}</p>
    <p>{user.email}</p>
    <p>{user.password}</p>
  </div>
}

export default UsuarioCard;