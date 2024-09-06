import LogoRimac from "../../assets/icons/LogoRimac"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import "./header.scss"



const Header = () => {
  return (
    <div className="header">
        <LogoRimac />
        <div className="header-contact">
            <p>¡Compra por este medio!</p>
            <div className="header-contact-phone">
                <PhoneIcon /> 
                <h2>(01) 411 6001</h2>
            </div>
        </div>
    </div>
  )
}

export default Header