export const Footer = () => {
  return (
    <footer className="bg-blue-300 w-full">
      <div className="container mx-auto">
        <div>
          <h1 className="text-white text-2xl font-bold">React Router v6</h1>
        </div>
        <div className="flex justify-center items-center py-4">
          <p className="text-white">© 2021 React Router v6</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
