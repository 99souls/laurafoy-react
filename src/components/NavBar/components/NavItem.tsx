import { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
  classNames?: string;
  isCurrentPage?: boolean;
  navURL: string;
}

const NavItem: React.FC<NavItemProps> = ({
  classNames,
  children,
  isCurrentPage,
  navURL,
}) => {
  if (isCurrentPage) {
    const extendClassNames = isCurrentPage ? 'active-nav-item' : '';
    classNames += ` ${extendClassNames}`;
  }
  return (
    <a
      className={classNames}
      href={navURL}
    >
      {children}
    </a>
  );
};

export default NavItem;
