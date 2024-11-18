import Twitter from '../../../assets/twitter.svg';
import Facebook from '../../../assets/facebook.svg';
import Instagram from '../../../assets/instagram.svg';

export const SocialLinks = () => {
  return (
    <nav>
      <ul>
        <li className="font-medium">Redes Sociais</li>
        <li className="flex space-x-4 items-stretch">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite nosso Instagram"
          >
            <img src={Instagram} alt="Ícone do Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite nossa página no Facebook"
          >
            <img src={Facebook} alt="Ícone do Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Twitter"
          >
            <img src={Twitter} alt="Ícone do Twitter" className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
