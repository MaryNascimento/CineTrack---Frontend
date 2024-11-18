import PropTypes from 'prop-types';

export const CardFilme = ({ imageSrc, altText, caption }) => {
  return (
    <div className="mt-4 ">
      <img src={imageSrc} alt={altText} />
      <p className="mt-2">{caption}</p>
    </div>
  );
};

// Definindo os tipos das props
CardFilme.propTypes = {
  imageSrc: PropTypes.string.isRequired, // URL da imagem, obrigatória
  altText: PropTypes.string.isRequired, // Texto alternativo, obrigatório
  caption: PropTypes.string, // Texto da legenda, opcional
};


