import ostinato from './../../assets/ProjectListing/ostinato.png';
import synergy from './../../assets/ProjectListing/synergy.png';
import malin_road from './../../assets/CaseStudies/malin_road.png';

import './styles.css';
import Card from '../Card/Card';

const caseStudies = [
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
];

const ProjectListing = () => {
  return (
    <div className='projectListingContainer'>
      <h2 className='recent-grotesk'>RECENT WORK</h2>

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
  );
};

export default ProjectListing;
