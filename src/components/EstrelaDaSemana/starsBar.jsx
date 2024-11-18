import "../../index.css";
import {RatingStars} from "./RatingStars";

export const StarsBar = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold leading-7">
        ESTRELA <br /> DA SEMANA
      </h1>
      <RatingStars/>
    </section>
  );
}

