import "../assets/css/footer.css"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook.esm";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp.esm";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";


function Footer(){
  return(
    <>
      <nav id="footer">
        <div className="fooder-div">
          <h3>contactos :</h3>
          <a href="https://www.facebook.com/" id="a"><h1><FaFacebook/></h1></a>
          <a href="" id="a"><h1><FaWhatsapp/></h1></a>
          <a href="" id="a"><h1><SiGmail/></h1></a>
        </div>
      </nav>      
    </>
  );
}
export default Footer;
