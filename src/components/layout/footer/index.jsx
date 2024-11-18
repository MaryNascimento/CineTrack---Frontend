import { Infos } from './infos';
import { SocialLinks } from './socialLinks';
import Logo from '../../../assets/logo-dark.svg';

export const Footer = () => {
  return (
    <footer className="bottom-0 w-full">
      <div className="bg-azulsecundario">
        <div className="flex p-4 justify-around leading-8">
          <img
            src={Logo}
            alt="Logo do CineTrack, plataforma de filmes e séries"
            className="w-40"
          />
          <div className="items-center gap-10">
            <div className="items-stretch">
              <h3 className="font-medium">
                🎬 Explore o mundo das histórias com a gente!
              </h3>
              <p>
                Junte-se a uma comunidade apaixonada por filmes e séries, onde
                cada ação é marcada e cada maratona vira roteiro.
              </p>
              <p>
                <span className="font-medium">CineTrack:</span> sua plataforma
                para compartilhar e reviver experiências memoráveis.
              </p>
            </div>

            <nav>
              <Infos />
            </nav>
          </div>

          <div className="content-center">
            <nav>
              <SocialLinks />
              <ul>
                <li className="font-medium mt-3">Precisa de ajuda?</li>
                <li className="underline">
                  <a href="/faleconosco">Fale conosco</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
