import { ReactNode } from 'react';
import './styles.css';

interface LinkButtonProps {
  children: ReactNode;
  destinationURL?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  destinationURL,
}) => {
  return (
    <a
      href={destinationURL}
      className='button fw-900 fs-32 recent-grotesk'
    >
      {children}
    </a>
  );
};

export default LinkButton;
