import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './styles.css';
import Card from '../../components/Card/Card';
import ostinato from './../../assets/ProjectListing/ostinato.png';
import synergy from './../../assets/ProjectListing/synergy.png';
import malin_road from './../../assets/CaseStudies/malin_road.png';
import times_new_roman from './../../assets/CaseStudies/times_new_roman.png';
import screen_time from './../../assets/CaseStudies/screen_time.png';
import yum_goods from './../../assets/CaseStudies/yum_goods.png';
import manifesto from './../../assets/CaseStudies/manifesto.png';

interface WorkProps {}

const caseStudies = [
  {
    title: 'YUM GOODS',
    description:
      'A responsive and aesthetic home page design for an online retailer...',
    buttonURL: 'yumgoods',
    image: yum_goods,
  },
  {
    title: '22 MALIN ROAD',
    description:
      'A set of logo designs for an airbnb in Moville, County Donegal...',
    buttonURL: 'malinroad',
    image: malin_road,
  },
  {
    title: 'OSTINATO',
    description:
      'For my final year project I designed an app that uses AI technology...',
    buttonURL: 'ostinato',
    image: ostinato,
  },
  {
    title: 'SYNERGY LEARNING',
    description:
      'As part of my Interaction Design degree, I had the privilege of...',
    buttonURL: 'synergy',
    image: synergy,
  },
  {
    title: 'SCREEN TIME INFOGRAPHIC',
    description:
      'An infographic illustrating the effects of screen time and...',
    buttonURL: 'screentime',
    image: screen_time,
  },
  {
    title: 'TNR TYPE SPECIMEN',
    description: 'A design project showcasing a classic typeface...',
    buttonURL: 'timesnewroman',
    image: times_new_roman,
  },
  {
    title: 'MANIFESTO',
    description:
      'My first graphic design project, showcasing the manifesto of...',
    buttonURL: 'manifesto',
    image: manifesto,
  },
];

const Work: React.FC<WorkProps> = () => {
  return (
    <>
      <NavBar />
      <div className='contentContainer workContent'>
        <h1>MY WORK</h1>
        <div className='cardContainer'>
          {caseStudies.map(({ title, description, buttonURL, image }) => {
            return (
              <Card
                title={title}
                description={description}
                buttonURL={buttonURL}
                image={image}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
