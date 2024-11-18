import userphoto from '../../../assets/user-icon.svg';
import { useUserData } from '../../../hooks/user/use-user-data';
import * as Popover from '@radix-ui/react-popover';

export const UserLink = () => {
  const token = sessionStorage.getItem('token');

  const { data, isLoading } = useUserData();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="flex items-center gap-2">
      <img src={userphoto} alt="Ícone do usuário" className="w-14 h-14" />
      {token && !isLoading ? (
        <Popover.Root>
          <Popover.Trigger className="cursor-pointer">
            {data?.username}
          </Popover.Trigger>
          <Popover.Content className="bg-gray-800 text-white p-4 rounded-md shadow-md z-50">
            <div className="flex flex-col gap-2">
              <a href="/profile" className="hover:text-gray-400 cursor-pointer">
                Minha Biblioteca
              </a>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-400"
              >
                Logout
              </button>
            </div>
            <Popover.Arrow className="fill-gray-800" />
          </Popover.Content>
        </Popover.Root>
      ) : (
        <a href="/login" className="text-base">
          Iniciar Sessão
        </a>
      )}
    </div>
  );
};
