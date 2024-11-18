

import StarIcon from "../../assets/star-icon.svg"; // Certifique-se de que esse caminho está correto

export const RatingStars = () => {
  return (
    <span className="bg-white w-40 h-7 rounded-full flex items-center justify-around gap-1 p-1">
          <img src={StarIcon} alt="Estrela" className="w-6 h-6" />
          <img src={StarIcon} alt="Estrela" className="w-6 h-6" />
          <img src={StarIcon} alt="Estrela" className="w-6 h-6" />
          <img src={StarIcon} alt="Estrela" className="w-6 h-6" />
          <img src={StarIcon} alt="Estrela" className="w-6 h-6" />
    </span>
  );
};
