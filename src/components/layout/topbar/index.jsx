import Logo from '../../../assets/logo-light.svg';
import { UserLink } from '../topbar/userLink';
import { SearchBar } from '../../searchBar';

export const TopBar = () => {
  return (
    <header>
      <div className="bg-azulprimario text-white flex items-center px-10 justify-between pt-2">
        {/* Logo e Navegação */}
        <div className="flex items-center gap-20">
          <img src={Logo} alt="logo CineTrack" className="w-[28%]" />
          <nav>
            <ul className="flex gap-10">
              <a href="/">HOME</a>
              <a href="/filters">FILMES</a>
            </ul>
          </nav>
        </div>

        {/* Barra de Pesquisa e Link do Perfil */}

        <SearchBar />
        <UserLink />
      </div>
    </header>
  );
};
