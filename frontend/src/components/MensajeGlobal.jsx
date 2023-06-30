function MensajeGlobal(props){
  const {contenido}=props;
  return<div
    className="itemMensaje"
  >
  <p>{contenido}</p>
  </div>
}
export default MensajeGlobal;