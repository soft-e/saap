import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si'
import "../assets/css/footer.css"

function Footer() {
  return (
    
      <div className="footer">
            <div
              className='ladoIzquierdo'
            >
              <p>
                Facultad de Ciencias y Tecnología (UMSS).
              </p>
              <p>
              Correo Electrónico: webmaster@fcyt.umss.edu.bo
              </p>
            </div>
            <div
              className='centro'
            >
              <p>Cochabamba - Bolivia</p>
            </div>
            <div
              className='ladoDerecho'
            >
              <p>
              Calle Sucre y parque la Torre.
              </p>
              <p>
              Contactos:591-4-4231765
              </p>
            </div>
        
      </div>
    
  )
}
export default Footer;
