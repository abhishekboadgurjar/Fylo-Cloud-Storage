import Logo from "../assets/images/logo.svg" 
import Location from "../assets/images/icon-location.svg"
import phone from "../assets/images/icon-phone.svg"
import email from '../assets/images/icon-email.svg'
const Footer = () => {
  return (<>
   <div className="footer">
    <div className="sec-1">
     <div className="logo">
      <img  src={Logo} alt="" />
     </div>
      <div className="location">
<img src={Location} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </div>
    <div className="sec-2">
      <div className="phone">
        <img src={phone} alt="" />
        <p>+1-543-123-4567</p>
      </div>
      <div className="email">
        <img src={email} alt="" />
        <p>example@fylo.com</p>
      </div>
      <p>Made with ❤️ by Abhishek Gurjar</p>
    </div>
    <div className="sec-3">
      <p>About Us</p>
      <p>Jobs</p>
      <p>Pres</p>
      <p>Blog</p>
    </div>
    <div className="sec-4">
      <p>Contact Us</p>
      <p>Terms</p>
      <p>Privacy</p>
    </div>
   </div>
   </>
  )
}

export default Footer