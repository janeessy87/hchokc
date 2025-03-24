import React from 'react'

export const ConCard = ({className, b1, b2}) => {
  return (
    <div className={`flex justify-center items-center pt-5 ${className} lgMobile:flex-col mdMobile:flex-col sMobile:flex-col`}>
    <button className={`flex justify-center items-center px-10 py-4 w-full max-h-16 text-xl text-center rounded-sm hover:scale-95 hover:bg-opacity-90 ${b1}`}>
      405-595-7072
    </button>
    <button className={`flex justify-center items-center px-10 py-4 m-5 w-full max-h-16 text-xl rounded-sm border-2 hover:scale-95 ${b2}`}>
      Contact Us
    </button>
  </div>
  )
}