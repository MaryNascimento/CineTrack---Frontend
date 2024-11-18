import { BotaoVerTodos } from './carrosselFilmes/botaoVerTodos.jsx';
import { CarrosselFilmes } from './carrosselFilmes/index.jsx';

export const Lancamentos = () => {
  return (
    <div className="text-white p-4 mt-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold ">LANÇAMENTOS</h1>
        <BotaoVerTodos />
      </div>

      <CarrosselFilmes />
    </div>
  );
};
