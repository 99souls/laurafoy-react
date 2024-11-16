import email from './../../assets/Universal/email.svg';
import instagram from './../../assets/Universal/instagram.svg';
import linkedin from './../../assets/Universal/linkedin.svg';
import './styles.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="contactContainer">
        <h2 className="bitter">GET IN TOUCH</h2>
        <a href="mailto: laurabfoy@gmail.com">
          <img src={email} />
        </a>
        <a href="https://www.instagram.com/laurafoy_ixd/">
          <img src={linkedin} />
        </a>
        <a href="https://www.linkedin.com/in/laura-foy-91715b1bb/">
          <img src={instagram} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
