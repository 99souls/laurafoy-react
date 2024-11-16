import { useLocation } from 'react-router-dom';
import logo from './../../assets/Universal/logo.svg';
import NavItem from './components/NavItem';
import './styles.css';

const getIsCurrentPage = (destinationURL: string) => {
  const location = useLocation();
  return location.pathname === destinationURL;
};

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavItem
        classNames="to-start"
        navURL={'/'}
      >
        <img
          src={logo}
          alt="Laura Foy Logo"
          aria-label="Laura Foy Logo"
          height="36px"
        />
      </NavItem>

      <NavItem
        classNames="bitter fw-700 fs-24 nav-item"
        navURL={'/'}
        isCurrentPage={getIsCurrentPage('/')}
      >
        HOME
      </NavItem>

      <NavItem
        classNames="bitter fw-700 fs-24 nav-item"
        navURL={'/about'}
        isCurrentPage={getIsCurrentPage('/about')}
      >
        ABOUT
      </NavItem>

      {/* <NavItem
        classNames="to-end"
        navURL={'https://www.linkedin.com/in/laura-foy-91715b1bb/'}
      >
        <img
          src={linkedin_icon}
          alt="Link to LinkedIn"
          aria-label="Link to LinkedIn account"
        />
      </NavItem>

      <NavItem navURL={'https://www.linkedin.com/in/laura-foy-91715b1bb/'}>
        <img
          src={instagram_icon}
          alt="Link to Instagram"
          aria-label="Link to Instagram account"
        />
      </NavItem> */}
    </div>
  );
};

export default NavBar;
