import  { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/templatePage.css";
import '../../assets/css/css-deysi/parqueo.css';
  import Navbar from '../../components/Navbar';
 import PlazasOcupadas from './PlazasOcupadas';
import ButtonBoxAdmin from '../../components/ButtonBoxAdmin';
  import PlazasDisponibles from './PlazasDisponibles';
  class Parqueo extends Component {
    state = {
      plazas: [
        { id: 1, nombre: 'Plaza ', estado: 'disponible' },
        { id: 2, nombre: 'Plaza ', estado: 'disponible' },
        { id: 3, nombre: 'Plaza ', estado: 'ocupada' },
        { id: 4, nombre: 'Plaza ', estado: 'disponible' },
        { id: 5, nombre: 'Plaza ', estado: 'ocupada' },
        { id: 6, nombre: 'Plaza ', estado: 'ocupada' },
        { id: 7, nombre: 'Plaza ', estado: 'ocupada' },
        { id: 8, nombre: 'Plaza ', estado: 'ocupada' },
        
        { id: 9, nombre: 'Plaza ', estado: 'disponible' },
        { id: 10, nombre: 'Plaza ', estado: 'disponible' },
        { id: 11, nombre: 'Plaza ', estado: 'disponible' },
        { id: 12, nombre: 'Plaza ', estado: 'disponible' },

        
      ],
    };
  
    handleClick = (id) => {
      const plazas = this.state.plazas.map((plaza) => {
        if (plaza.id === id) {
          plaza.estado = plaza.estado === 'disponible' ? 'ocupada' : 'disponible';
        }
        return plaza;
      });
      this.setState({ plazas });
    };
  
    render() {
      const plazasDisponibles = this.state.plazas.filter(plaza => plaza.estado === 'disponible');
      const plazasOcupadas = this.state.plazas.filter(plaza => plaza.estado === 'ocupada');
  
      return (
        <>
         <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
           
         <ButtonBoxAdmin/>

         
         
        
         <div  className='.con'>
        <h1 className='p'></h1>
        </div> 
        <div className='.containers' id='b'>
              <Link to="/login"> 
              <button>registro de sitios</button>
              </Link>
        </div>
        <div  className='.con'>
        <h1 className='p'></h1>
        </div> 
       
        <div className="parqueo">
          <PlazasDisponibles plazas={plazasDisponibles} handleClick={this.handleClick} />
          <PlazasOcupadas plazas={plazasOcupadas} handleClick={this.handleClick}/>
        </div>

        </div>
       
        </>
      );
    }
  }
  
  export default Parqueo;
  
 
  
 