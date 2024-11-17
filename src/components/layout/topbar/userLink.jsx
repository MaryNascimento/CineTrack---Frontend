import { useState } from 'react';
import userphoto from '../../../assets/user-icon.svg';

export const UserLink = () => {
  // Estado para determinar se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para alternar o estado de login
  const handleLoginClick = () => {
    setIsLoggedIn(true); // Simula login ao clicar no link
  };

  return (
    <div
      className="flex items-center justfy-center gap-4"
      aria-label="perfil de usuário"
    >
      {isLoggedIn ? (
        // Quando o usuário está logado
        <img src={userphoto} alt="Ícone do usuário" className="w-24 h-24" />
      ) : (
        // Quando o usuário não está logado
        <div className="flex items-center justify-center gap-2">
          <img src={userphoto} alt="Ícone do usuário" className="w-24 h-24" />
          <a
            href="#"
            onClick={handleLoginClick}
            rel="noopener noreferrer"
            className="text-2xl font-bold leading-5"
          >
            Entre ou <br /> cadastre-se
          </a>
        </div>
      )}
    </div>
  );
};
