import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import auth from '../../api/auth';

export const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        try {
          // Requisição para o backend para verificar o token
          const response = await auth(`/auth/confirm-account?token=${token}`, {
            method: 'GET',
          });

          if (response.status === 200) {
            // Se o token for válido, redireciona para login
            navigate('/login');
          } else {
            // Caso o token seja inválido
            navigate('/login?error=invalid-token');
          }
        } catch (error) {
          console.log(error);
          // Caso ocorra algum erro na requisição
          navigate('/login?error=server-error');
        }
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="loading-container text-white">
      <p>Verificando seu e-mail...</p>
    </div>
  );
};
