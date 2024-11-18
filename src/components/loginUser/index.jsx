import { useState } from 'react'; // Importe a função de envio de email
import { useAuthUser } from '../../hooks/user/use-auth-user';

export const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const { authUser } = useAuthUser();

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = [];

    if (!email) newErrors.push('email');
    if (email && !isValidEmail(email)) newErrors.push('invalidEmail');
    if (!password) newErrors.push('password');

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Todos os campos estão preenchidos corretamente, enviando o e-mail
      authUser(
        { email, password },
        {
          onSuccess: () => alert('Login realizado com sucesso!'),
          onError: () => alert('Não foi possível realizar o login'),
        }
      );
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  const isFieldInvalid = (field) => errors.includes(field);

  return (
    <form className="p-8 w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <h2 className="text-4xl mb-5 font-semibold text-center text-azulfundo">
        Faça Login na sua Conta
      </h2>

      <div>
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded mt-1 text-sm font-light`}
            placeholder="Digite sua senha"
          />
        </div>
      </div>

      <button className="px-6 py-2 mt-4 bg-azulprimario rounded-lg hover:bg-azulsecundario text-white w-full">
        Entrar
      </button>
    </form>
  );
};
