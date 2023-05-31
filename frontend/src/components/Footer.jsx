import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import "../assets/css/footer.css"

function Footer(){
  return(
    <>
      <nav id="footer">
        <div className="contenedorFooder">
            <div>
              <h3 className='correoMailFooder'>softwareentrepreneurs299@gmail.com</h3>
            </div>
            <div className='contenedorDeIconosFooder'>
              <a className='facebook' href="https://www.facebook.com/fcytumssOficial" id="a"><h1><FaFacebook/></h1></a>
              <a className='whatsapp' href="https://web.whatsapp.com/send?phone=591 69475511" id="a"><h1><BsWhatsapp/></h1></a>
              <a className='gmail' href="mailto:softwareentrepreneurs299@gmail.com" id="a"><h1><SiGmail/></h1></a>
            </div>
        </div>
      </nav>      
    </>
  )
}
export default Footer;
