import axios from "axios";
import {URL_API} from '../../../services/EndPoint';

function listarMensajes() {

    const mensajes=axios.get(`${URL_API}/mensajes`)
    console.log(mensajes.data)

    let mensajesHTML='';
    for(let i=0; i< mensajes.length; i++) {
        mensajesHTML+=cargarContenido(mensajes[i],i+1);
    }
    document.getElementById('lista-ingresos').innerHTML=mensajesHTML;
}
function cargarContenido(mensajes,index) {

    
    let ingresoHTML=`
        <h2>Mensajes Redactados</h2>
        <div className="barraDeAbajo" key=${index}>
            <h3>${index+1}</h3>
            <h3>asunto:${mensajes.asunto}</h3>
            <h3>Destinatario:${mensajes.destinatario}</h3>
        </div>
    `;
    return ingresoHTML;
}

export default listarMensajes;