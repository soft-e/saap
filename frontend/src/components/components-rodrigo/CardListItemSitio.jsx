import "../../assets/css/css-rodrigo/CardListItemSitio.css"
function CardListItemSitio(parqueo){
  return<>
    <div
      className="sitioParqueo"
    >
      <h2>nombre parqueo: {parqueo?.nombre}</h2>
      <h2>sitio libre: {parqueo?.sitioLibre}</h2>
      <div>
        <button>asignar este sitio</button>
      </div>
    </div>
    
  </>
}
export default CardListItemSitio;
