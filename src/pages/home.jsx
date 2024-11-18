import '../index.css';
import { EstrelaDaSemana } from '../components/EstrelaDaSemana/index.jsx';
import { Lancamentos } from '../components/lancamentos.jsx';

export const Home = () => {
  return (
    <div>
      <EstrelaDaSemana />
      <Lancamentos />
    </div>
  );
};
