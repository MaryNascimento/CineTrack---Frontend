import '../index.css';
import { EstrelaDaSemana } from '../components/EstrelaDaSemana/index.jsx';
import { Lancamentos } from '../components/lancamentos.jsx';
import { Genres } from '../components/genres.jsx';
import { Upcoming } from '../components/upcoming.jsx';

export const Home = () => {
  return (
    <div className="mx-5">
      <EstrelaDaSemana />
      <Lancamentos />
      <Genres />
      <Upcoming />
    </div>
  );
};
