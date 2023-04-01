import React from 'react'
import Sidebar from './Sidebar'
import style from "../src/styles/Home.module.css"

export default function Layout({ children }: any) {
  return (
    <>
      <div className='h-screen flex flex-row justify-start bg-blackg-bg shadow'>
        <Sidebar />
        <div className='flex-1 bg-blackg-bg overflow-y-auto'>
          <div className="px-4 py-5 sm:px-6 bg-white">
            <h3 className="font-medium leading-6 text-gray-900">
              path
            </h3>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}