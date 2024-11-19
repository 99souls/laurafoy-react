interface ProjectCardProps {
  projectTitle: string;
  projectImage: string;
  isDarkMode: boolean;
  projectURL: string;
}

const ProjectCard = ({
  projectTitle,
  projectImage,
  isDarkMode,
  projectURL,
}: ProjectCardProps) => {
  return (
    <div className='projectCard'>
      <a href={`/${projectURL}`}>
        <div
          className='projectCardImage'
          style={{ backgroundImage: `url(${projectImage})` }}
        >
          <div className={isDarkMode ? 'overlayDark' : 'overlayLight'}>
            <h1 className='recent-grotesk'>{projectTitle.toUpperCase()}</h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
