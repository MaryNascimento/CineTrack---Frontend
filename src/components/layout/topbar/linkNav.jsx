import PropTypes from 'prop-types';

//Navegaçao topbar: Filme, Serie
export const LinkNav = ({ href, children }) => {
  return (
    <li className="text-base font-semibold">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
};

LinkNav.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
