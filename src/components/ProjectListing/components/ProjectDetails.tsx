import { ReactNode } from 'react';
import LinkButton from '../../Button/LinkButton';

interface ProjectDetailsProps {
  projectTitle?: string;
  projectImage?: string;
  projectNumber?: string;
  children?: ReactNode;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectTitle,
  projectImage,
  projectNumber,
  children,
}) => {
  return (
    <div className="projectDetailsContainer">
      <div className="projectDetailsText">
        <p className="projectNumber fs-24">PROJECT {projectNumber}</p>
        <div className="projectDescription">
          <h2 className="bitter">{projectTitle}</h2>
          <p>{children}</p>
          <LinkButton destinationURL="/ostinato">SEE MORE</LinkButton>
        </div>
      </div>
      <div className="projectDetailsImage">
        <img
          className="projectDetailsImage"
          src={projectImage}
        ></img>
      </div>
    </div>
  );
};

export default ProjectDetails;
