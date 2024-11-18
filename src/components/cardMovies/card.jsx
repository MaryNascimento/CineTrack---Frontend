import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const CardFilme = ({ imageSrc, altText, caption, id }) => {
  return (
    <NavLink to={`/movie/${id}`}>
      <div className="mt-4 ">
        <img src={imageSrc} alt={altText} />
        <p className="mt-2">{caption}</p>
      </div>
    </NavLink>
  );
};

// Definindo os tipos das props
CardFilme.propTypes = {
  imageSrc: PropTypes.string.isRequired, // URL da imagem, obrigatória
  altText: PropTypes.string.isRequired, // Texto alternativo, obrigatório
  caption: PropTypes.string, // Texto da legenda, opcional
  id: PropTypes.string,
};
