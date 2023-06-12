import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/css-jose/listarDocentes.css';
import { URL_API } from "../../services/EndPoint"

const endPoint = URL_API+'/vehiculos';

const ContratosDataVehiculo = (props) => {
    const [vehiculos, setVehiculos] = useState( [] );
    const id = props.vehiculo_id;

    useEffect ( () => {
        getAllVehiculos();
    }, []);

    const getAllVehiculos = async () => {
        const response = await axios.get(endPoint);
        setVehiculos(response.data);
        console.log("sacando datos del vehiculo: " + vehiculos)
    }

    function getPlaca (vehiculo_id){
        let dato = "placa no obtenido";
        for(let i = 0; i < vehiculos.length; i++){
            if(vehiculos[i].id === vehiculo_id){
                dato = vehiculos[i].placa;
                break;
            }
        }
        return dato;
    }

    function getColor (vehiculo_id){
        let dato = "color no obtenido"; 
        for(let i = 0; i < vehiculos.length; i++){
            if(vehiculos[i].id === vehiculo_id){
                dato = vehiculos[i].color;
                break;
            }
        }
        return dato;
    }

    function getMarca (vehiculo_id){
        let dato = "marca no obtenido"; 
        for(let i = 0; i < vehiculos.length; i++){
            if(vehiculos[i].id === vehiculo_id){
                dato = vehiculos[i].marca;
                break;
            }
        }
        return dato;
    }

    function getModelo (vehiculo_id){
        let dato = "modelo no obtenido"; 
        for(let i = 0; i < vehiculos.length; i++){
            if(vehiculos[i].id === vehiculo_id){
                dato = vehiculos[i].modelo;
                break;
            }
        }
        return dato;
    }

    return <div className="contenedorListarDocentes_j">
        
        <div className="contenedorTabla_j">
            <h2>Datos del Vehiculo</h2>
            <div>
                <div className="contenedor_label_j">
                    <label className="label_j">Placa:</label>
                    <label className="label_j">{getPlaca(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Color:</label>
                    <label className="label_j">{getColor(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Marca:</label>
                    <label className="label_j">{getMarca(id)}</label>
                </div>
                <div className="contenedor_label_j">
                    <label className="label_j">Modelo:</label>
                    <label className="label_j">{getModelo(id)}</label>
                </div>
            </div>
        </div>
    </div>
}

export default ContratosDataVehiculo;