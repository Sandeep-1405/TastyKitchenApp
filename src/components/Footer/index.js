import {
  FaPinterestSquare,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa'
git 
import TastyKitchens from '../Gallery/TastyKitchens.png'

import './index.css'

const Footer = () => (
  <div className="Footer-container">
    <div className="footer-logo">
      <img src={TastyKitchens} alt="website-footer-logo" />
      <h1>Tasty Kitchens</h1>
    </div>
    <p>The only thing we are serious about is food. Contact us on</p>
    <div className="social-icons">
      <FaPinterestSquare
        data-testid="pintrest-social-icon"
        className="social-icons"
      />
      <FaInstagram
        data-testid="instagram-social-icon"
        className="social-icons"
      />
      <FaTwitter data-testid="twitter-social-icon" className="social-icons" />
      <FaFacebookSquare
        data-testid="facebook-social-icon"
        className="social-icons"
      />
    </div>
  </div>
)
export default Footer
