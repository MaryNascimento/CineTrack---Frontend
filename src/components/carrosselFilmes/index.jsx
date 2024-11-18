import { CardFilme } from './card'; // Make sure the path is correct
import Img from '../../assets/exemplo-filme.png'; // Substitua pelo caminho correto para a imagem de placeholder

export const CarosselFilmes = () => {
  return (
    <div className="flex justify-between gap-4 w-full mt-4">
      <CardFilme
        imageSrc={Img}
        altText="Imagem de um pôr do sol"
        caption="Um belo pôr do sol"
      />
    </div>
  );
};
