import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-indigo-700">MegaShop</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-indigo-700 cursor-pointer">Home</li>
        <li className="hover:text-indigo-700 cursor-pointer">Shop</li>
        <li className="hover:text-indigo-700 cursor-pointer">Cart</li>
        <li className="hover:text-indigo-700 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar