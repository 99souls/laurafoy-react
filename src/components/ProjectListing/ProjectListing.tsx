// import ostinato from './../../assets/ProjectListing/ostinato.png';
// import synergy_learning from './../../assets/ProjectListing/synergy_learning.png';
// import ProjectDetails from './components/ProjectDetails';
import ostinato from './../../assets/ProjectListing/ostinato.png';
import synergy from './../../assets/ProjectListing/synergy.png';
import ProjectCard from './components/ProjectCard.tsx/ProjectCard';
import './styles.css';

const recentWorks = [
  {
    projectURL: 'ostinato', // THIS NEEDS TO BE LOWERCASE!!!
    vanityTitle: 'Ostinato',
    projectImage: ostinato,
    isDarkMode: true,
  },
  {
    projectURL: 'synergy',
    vanityTitle: 'Synergy Learning Internship',
    projectImage: synergy,
    isDarkMode: false,
  },
];

const ProjectListing = () => {
  return (
    <div className='projectListingContainer'>
      <h2 className='recent-grotesk'>RECENT WORK</h2>

      <div className='projectCardsContainer'>
        {recentWorks.map((item) => {
          return (
            <ProjectCard
              projectTitle={item.vanityTitle}
              projectImage={item.projectImage}
              isDarkMode={item.isDarkMode}
              projectURL={item.projectURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectListing;
