import React from 'react'

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-bold">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard