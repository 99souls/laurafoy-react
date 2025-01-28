import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import malin_road from './../../assets/CaseStudies/malin_road.png';
import malin_road_logo from './../../assets/CaseStudies/malin_road_logo.png';

interface MalinRoadProps {}

const MalinRoad: React.FC<MalinRoadProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='22 Malin Road'
          subtitle='A set of logo designs for an airbnb in Moville, Co.Donegal.  '
          bodyCopy='For this project, I was commissioned  to design a logo for 22 Malin Road, an airbnb in the coastal town of Moville, Co.Donegal. The client wanted a logo to use for promotions that would give prospective guests a feeling of the warmth and welcoming atmosphere that they would experience on their their stay. Each choice from typography to colour where made with the goal of exhibiting a cozy, homely warmth, inviting guests to stay, relax and enjoy the surrounding picturesque town of Moville. I ended up designing multiple cohesive variations of the logo that the client could implement for different purposes.'
          optionalBodyImage={malin_road_logo}
          imageSource={malin_road}
        />
      </div>
      <Footer />
    </>
  );
};

export default MalinRoad;
