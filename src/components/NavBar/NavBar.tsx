import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './../../assets/universal/logo.svg';
import NavItem from './components/NavItem';
import './styles.css';

const getIsCurrentPage = (destinationURL: string) => {
  const location = useLocation();
  return location.pathname === destinationURL;
};

interface NavBarProps {
  hideNavButtons?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ hideNavButtons }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className='nav-bar'>
      <NavItem
        navURL={'/'}
        classNames='logo'
      >
        <img
          src={logo}
          alt='Laura Foy Logo'
          aria-label='Laura Foy Logo'
          className='logo-monogram'
        />
      </NavItem>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label='Toggle Navigation Menu'
      >
        <span className='hamburger-bar'></span>
        <span className='hamburger-bar'></span>
        <span className='hamburger-bar'></span>
      </button>

      {!hideNavButtons && (
        <div className={`navItemGroup ${menuOpen ? 'open' : ''}`}>
          <NavItem
            classNames='recent-grotesk fw-700 fs-32 nav-item'
            navURL={'/'}
            isCurrentPage={getIsCurrentPage('/')}
          >
            HOME
          </NavItem>
          <NavItem
            classNames='recent-grotesk fw-700 fs-32 nav-item'
            navURL={'/about'}
            isCurrentPage={getIsCurrentPage('/about')}
          >
            ABOUT
          </NavItem>
          <NavItem
            classNames='recent-grotesk fw-700 fs-32 nav-item'
            navURL={'/work'}
            isCurrentPage={getIsCurrentPage('/work')}
          >
            WORK
          </NavItem>
        </div>
      )}
    </div>
  );
};

export default NavBar;
