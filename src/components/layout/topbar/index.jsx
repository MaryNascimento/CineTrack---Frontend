/* eslint-disable linebreak-style */
import { LinkNav } from './linkNav';
import Logo from '../../../assets/logo-topbar.png';
import { SearchBar } from '../../searchBar';
import { UserLink } from '../topbar/userLink';

export const TopBar = () => {
  return (
    <header>
      <div className="bg-azulprimario text-white flex items-center p-4 justify-between">
        {/* Logo e Navegação */}
        <div className="flex items-center gap-10">
          <img src={Logo} alt="logo CineTrack" />
          <nav>
            <ul className="flex space-x-4 items-stretch gap-4">
              <LinkNav href="http://">FILMES</LinkNav>
              <LinkNav href="http://">SÉRIES</LinkNav>
            </ul>
          </nav>
        </div>

        {/* Barra de Pesquisa e Link do Perfil */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <UserLink />
        </div>
      </div>
    </header>
  );
};

