import React from 'react'

const SectionContainer = ({ title, children }) => {
  return (
      <section className="my-6 px-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">{title}</h2>
      {children}
    </section>
  )
}

export default SectionContainer