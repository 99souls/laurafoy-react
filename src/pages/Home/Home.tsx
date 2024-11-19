import Footer from '../../components/Footer/Footer';
import HomeAboutSection from '../../components/HomeAboutSection/HomeAboutSection';
import NavBar from '../../components/NavBar/NavBar';
import ProjectListing from '../../components/ProjectListing/ProjectListing';
import './Home.css';

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className='contentContainer'>
        <HomeAboutSection />
        <ProjectListing />
      </div>
      <Footer />
    </>
  );
};

export default Home;
