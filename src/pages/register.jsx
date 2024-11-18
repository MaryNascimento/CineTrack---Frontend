import { RegisterUser } from '../components/registerUser';
import Banner from '../assets/BgRegister.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <div className="absolute left-36 top-28">
        <button
          className="flex gap-2 text-white items-center"
          onClick={() => navigate('/')}
        >
          <span>
            <FaArrowCircleLeft className="text-xl" />
          </span>
          <span>Home</span>
        </button>
      </div>
      <div className="w-[60%] h-[80%] bg-white rounded-xl flex">
        <section className="w-1/2 relative">
          <img src={Banner} alt="bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white backdrop-brightness-50">
            <h1 className="text-2xl font-bold">Já possui uma conta?</h1>
            <p className="m-3">Clique no botão abaixo e faça seu login</p>
            <button
              className="px-6 py-2 bg-azulprimario rounded-lg hover:bg-azulsecundario"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </section>
        <section className="w-1/2 flex items-center">
          <RegisterUser />
        </section>
      </div>
    </div>
  );
};
