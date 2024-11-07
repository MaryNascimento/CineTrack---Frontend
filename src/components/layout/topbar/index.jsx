export const TopBar = () => {
  return (
    <header className="bg-blue-700 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-white text-2xl font-bold">React Router v6</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
