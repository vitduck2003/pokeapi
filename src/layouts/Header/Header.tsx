import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-200 py-8 mx-6">
      <nav className="mx-auto flex container justify-between items-center px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Logo" />
          </a>
        </div>
      
        <div className="flex items-center">
          <a href="/" className="px-4 py-2 text-gray-600 hover:text-red-600">Home</a>
          <a href="/login" className="px-4 py-2 text-gray-600 hover:text-red-600">Login</a>
          <a href="register" className="px-4 py-2 text-gray-600 hover:text-red-600">Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;