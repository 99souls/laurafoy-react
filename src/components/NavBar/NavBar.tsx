import { useLocation } from 'react-router-dom';
import logo from './../../assets/Universal/logo.svg';
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
  return (
    <div className='nav-bar'>
      <NavItem
        classNames='to-start'
        navURL={'/'}
      >
        <img
          src={logo}
          alt='Laura Foy Logo'
          aria-label='Laura Foy Logo'
          height='36px'
        />
      </NavItem>

      {!hideNavButtons ? (
        <>
          <NavItem
            classNames='bitter fw-700 fs-24 nav-item'
            navURL={'/'}
            isCurrentPage={getIsCurrentPage('/')}
          >
            HOME
          </NavItem>

          <NavItem
            classNames='bitter fw-700 fs-24 nav-item'
            navURL={'/insertnamehere'}
            isCurrentPage={getIsCurrentPage('/insertnamehere')}
          >
            insertnamehere
          </NavItem>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
