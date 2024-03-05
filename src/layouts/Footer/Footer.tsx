import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mx-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <img className="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Logo" />
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Design by <a href="https://example.com" className="text-gray-600 hover:text-red-600">Dinh Viet Duc</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;