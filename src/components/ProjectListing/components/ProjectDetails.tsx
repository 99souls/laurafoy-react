import { ReactNode } from 'react';
import LinkButton from '../../Button/LinkButton';

interface ProjectDetailsProps {
  projectTitle: string;
  projectImage: string;
  projectNumber: string;
  projectUrl: string;
  children: ReactNode;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectTitle,
  projectImage,
  projectNumber,
  projectUrl,
  children,
}) => {
  return (
    <div className='projectDetailsContainer'>
      <div className='projectDetailsText'>
        <p className='projectNumber fs-24'>PROJECT {projectNumber}</p>
        <div className='projectDescription'>
          <h2 className='recent-grotesk'>{projectTitle}</h2>
          <p>{children}</p>
          <LinkButton destinationURL={`/${projectUrl}`}>SEE MORE</LinkButton>
        </div>
      </div>
      <div className='projectDetailsImage'>
        <img
          className='projectDetailsImage'
          src={projectImage}
        ></img>
      </div>
    </div>
  );
};

export default ProjectDetails;

{
  /* <ProjectDetails
        projectTitle='OSTINATO'
        projectNumber='01'
        projectImage={ostinato}
        projectUrl='ostinato'
      >
        For my final year project I designed an app that uses AI technology to
        reimagine music education.
      </ProjectDetails>
      <ProjectDetails
        projectTitle='SYNERGY LEARNING'
        projectNumber='02'
        projectImage={synergy_learning}
        projectUrl='synergy'
      >
        I had the privilege of spending a year on placement at Synergy Learning
        as a UX design intern.
      </ProjectDetails> */
}
