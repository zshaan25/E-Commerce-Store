import React from 'react'

const NewsLetterSignup = () => {
  return (
    <section className="text-center bg-indigo-50 p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Join Our Newsletter</h3>
      <p className="text-gray-600 mb-4">Get exclusive deals and latest updates!</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded px-4 py-2 mr-2 focus:ring-2 focus:ring-indigo-600"
      />
      <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">
        Subscribe
      </button>
    </section>
  )
}

export default NewsLetterSignup