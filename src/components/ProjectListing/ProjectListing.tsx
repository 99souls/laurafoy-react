import ostinato from './../../assets/ProjectListing/ostinato.png';
import synergy_learning from './../../assets/ProjectListing/synergy_learning.png';
import ProjectDetails from './components/ProjectDetails';
import './styles.css';

const ProjectListing = () => {
  return (
    <div className="projectListingContainer">
      <h2 className="bitter">MY PROJECTS</h2>
      <ProjectDetails
        projectTitle="OSTINATO"
        projectNumber="01"
        projectImage={ostinato}
      >
        For my final year project I designed an app that uses AI technology to
        reimagine music education.
      </ProjectDetails>
      <ProjectDetails
        projectTitle="SYNERGY LEARNING"
        projectNumber="02"
        projectImage={synergy_learning}
      >
        I had the privilege of spending a year on placement at Synergy Learning
        as a UX design intern.
      </ProjectDetails>
    </div>
  );
};

export default ProjectListing;
