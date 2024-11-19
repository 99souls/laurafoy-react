import email from './../../assets/universal/email.svg';
import instagram from './../../assets/universal/instagram.svg';
import linkedin from './../../assets/universal/linkedin.svg';
import './styles.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer'>
      <div className='contactContainer'>
        <h2 className='recent-grotesk'>GET IN TOUCH</h2>
        <div className='contactLinksContainer'>
          <a href='mailto: laurabfoy@gmail.com'>
            <img src={email} />
          </a>
          <a href='https://www.instagram.com/laurafoy_ixd/'>
            <img src={linkedin} />
          </a>
          <a href='https://www.linkedin.com/in/laura-foy-91715b1bb/'>
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
