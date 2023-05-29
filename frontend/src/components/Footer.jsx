import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import "../assets/css/footer.css"

function Footer(){
  return(
    <>
      <nav id="footer">
        <div className="contenedorFooder">
            <a className='facebook' href="https://www.facebook.com/" id="a"><h1><FaFacebook/></h1></a>
            <a className='whatsapp' href="" id="a"><h1><BsWhatsapp/></h1></a>
            <a className='gmail' href="" id="a"><h1><SiGmail/></h1></a>
        </div>
      </nav>      
    </>
  )
}
export default Footer;
