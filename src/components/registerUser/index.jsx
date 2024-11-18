import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { useState } from 'react'; // Importe a função de envio de email
import { useCreateUser } from '../../hooks/user/use-create-user';

export const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [passwordFocused, setPasswordFocused] = useState(false); // Novo estado para controle do foco

  const { createNewUser } = useCreateUser();

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const passwordRequirements = {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = [];

    if (!username) newErrors.push('username');
    if (!email) newErrors.push('email');
    if (email && !isValidEmail(email)) newErrors.push('invalidEmail');
    if (!password) newErrors.push('password');
    if (!confirmPassword) newErrors.push('confirmPassword');
    if (password !== confirmPassword) newErrors.push('passwordMismatch');

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Todos os campos estão preenchidos corretamente, enviando o e-mail

      createNewUser(
        { email, password, username },
        {
          onSuccess: () => alert('Email de confirmação enviado com sucesso!'),
          onError: () => alert('Erro ao enviar o e-mail de confirmação.'),
        }
      ); // Envia o e-mail com o nome completo do usuário
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  const isFieldInvalid = (field) => errors.includes(field);
  const isPasswordMismatch =
    password !== confirmPassword && confirmPassword !== '';

  return (
    <form className="p-8 w-full flex flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="text-4xl mb-5 font-semibold text-center text-azulfundo">
        Crie sua Conta
      </h2>

      <div>
        <div className="mb-4">
          <label className="text-sm">Nome de Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full p-3 border rounded-md mt-1 text-sm font-light ${isFieldInvalid('username') ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Digite seu nome de usuário"
          />
          {isFieldInvalid('username') && (
            <div className="text-red-500 text-sm">
              Por favor, informe seu nome de usuário.
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="text-sm">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded mt-1 text-sm font-light ${isFieldInvalid('email') || isFieldInvalid('invalidEmail') ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="email@exemplo.com"
          />
          {isFieldInvalid('email') && (
            <div className="text-red-500 text-sm">
              Por favor, informe seu email.
            </div>
          )}
          {isFieldInvalid('invalidEmail') && (
            <div className="text-red-500 text-sm">
              Email inválido. Verifique o formato do email.
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="text-sm">Senha</label>
          <HoverCard open={passwordFocused}>
            <HoverCardTrigger asChild>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)} // Foco ativado ao clicar no campo
                onBlur={() => setPasswordFocused(false)} // Foco removido ao sair do campo
                className={`w-full p-3 border rounded mt-1 text-sm font-light ${isFieldInvalid('password') ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Digite sua senha"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80 ml-2" side="right">
              <div className="mt-2 p-2 bg-white border border-gray-300 rounded text-gray-700 text-sm">
                <p className="font-semibold mb-2">Obrigatório pelo menos:</p>
                <ul className="list-disc pl-5">
                  <li
                    className={
                      passwordRequirements.hasUppercase
                        ? 'text-green-700'
                        : 'text-red-500'
                    }
                  >
                    Uma Letra maiúscula
                  </li>
                  <li
                    className={
                      passwordRequirements.hasLowercase
                        ? 'text-green-700'
                        : 'text-red-500'
                    }
                  >
                    Uma Letra minúscula
                  </li>
                  <li
                    className={
                      passwordRequirements.hasNumber
                        ? 'text-green-700'
                        : 'text-red-500'
                    }
                  >
                    Um número
                  </li>
                  <li
                    className={
                      passwordRequirements.hasSpecialChar
                        ? 'text-green-700'
                        : 'text-red-500'
                    }
                  >
                    Um caractere especial
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mb-4">
          <label className="text-sm">Repetir Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-3 border rounded mt-1 text-sm font-light ${isFieldInvalid('confirmPassword') || isPasswordMismatch ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Digite sua senha novamente"
          />
        </div>

        {isPasswordMismatch && (
          <div className="text-red-500 text-sm mb-4">
            As senhas não coincidem.
          </div>
        )}
      </div>

      <button className="px-6 py-2 mt-4 bg-azulprimario rounded-lg hover:bg-azulsecundario text-white w-full">
        Enviar
      </button>
    </form>
  );
};
