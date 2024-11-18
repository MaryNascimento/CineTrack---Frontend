//import {StarsBar }from "./StarsBar";

import { InfosFilme } from './infoFilme';
import { StarsBar } from './StarsBar';

export const EstrelaDaSemana = () => {
  return (
    <div className="bg-cover bg-center opacity-75 text-white p-8 flex gap-24 items-center ">
      <StarsBar />
      <InfosFilme />
    </div>
  );
};
