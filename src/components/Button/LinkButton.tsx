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
      className='button fw-900 fs-24 bitter'
    >
      {children}
    </a>
  );
};

export default LinkButton;
