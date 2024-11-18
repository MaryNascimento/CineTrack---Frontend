//import {StarsBar }from "./StarsBar";
import { InfosFilme } from './InfoFilme';
import { StarsBar } from './StarsBar';
import { RatingStars } from './RatingStars';

export const EstrelaDaSemana = () => {
  return (
    <div className=" text-white p-8 flex gap-24 items-center ">
       <StarsBar/> 
      {/* <RatingStars/> */}
      <InfosFilme />
    </div>
  );
};
