import notfound from '../../assets/404/404.png';
import LinkButton from '../../components/Button/LinkButton';
import NavBar from '../../components/NavBar/NavBar';
import './styles.css';

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className='notFoundContainer'>
        <img
          src={notfound}
          alt='404'
          className='notFoundImage'
        />
        <p className='notFoundText'>
          <strong>Oh no!</strong> The page you're looking for has gone missing.
        </p>
        <LinkButton destinationURL='/'>GO BACK TO HOME</LinkButton>
      </div>
    </>
  );
};

export default PageNotFound;
