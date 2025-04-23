import ostinato from './../../assets/ProjectListing/ostinato.png';
import yum_goods from './../../assets/ProjectListing/yum_goods.png';
import malin_road from './../../assets/CaseStudies/malin_road.png';

import './styles.css';
import Card from '../Card/Card';

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
