import React from 'react'

const CategoryCard = ({ title, icon }) => {
  return (
      <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow">
      <div className="text-4xl">{icon}</div>
      <span className="text-gray-700 font-medium">{title}</span>
    </div> 
  )
}

export default CategoryCard