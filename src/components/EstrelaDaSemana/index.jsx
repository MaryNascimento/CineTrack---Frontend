//import {StarsBar }from "./StarsBar";
import { InfosFilme } from './InfoFilme';
import { StarsBar } from './StarsBar';

export const EstrelaDaSemana = () => {
  return (
    <div className="bg-bg-banner bg-cover bg-center opacity-75 text-white p-8 flex gap-24 items-center ">
       <StarsBar/> 
      <InfosFilme />
    </div>
  );
};
