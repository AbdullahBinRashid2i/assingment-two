import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Header</h1>
        <h2 className="text-lg">About</h2>
        <h2 className="text-lg">Contact</h2>
      </div>
    </header>
  )
}

export default page
