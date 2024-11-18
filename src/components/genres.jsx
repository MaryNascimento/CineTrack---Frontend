import { useNavigate } from 'react-router-dom';
import Family from '../assets/Genre1.png';
import Happy from '../assets/Genre2.png';
import Adventure from '../assets/Genre3.png';
import Sad from '../assets/Genre4.png';
import Classics from '../assets/Genre5.png';
import Differente from '../assets/Genre6.png';
export const Genres = () => {
  const list = [
    { image: Family, title: 'Maratonar em Família' },
    { image: Happy, title: 'Chorar de Rir' },
    { image: Adventure, title: 'Aventura e Emoção' },
    { image: Sad, title: 'Se Emocionar e se Envolver' },
    { image: Classics, title: 'Curtir os Clássicos' },
    { image: Differente, title: 'Sair da Rotina' },
  ];
  const navigate = useNavigate();
  return (
    <div className="text-white p-4 mt-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold ">PARA TODAS AS VIBES E HUMORES</h1>
        <button
          className="bg-azulsecundario w-36 h-8 p-2 rounded-full inline-flex items-center justify-center font-medium"
          onClick={() => navigate('/filters')}
        >
          VER TODOS
        </button>
      </div>

      <div className="flex justify-between gap-4 w-full mt-4">
        {list.map((item, index) => (
          <div key={index}>
            <div className="mt-4 ">
              <img src={item.image} alt={item.title} />
              <p className="mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
