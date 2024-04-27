import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100 flex-wrap max-container ">
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-200 dark:border-gray-200">
        <span className="text-sm text-gray-900 sm:text-center dark:text-gray-900">© 2024 <a href="#" className="hover:underline">Edgetracker</a>. All Rights Reserved.
        </span>
        <div className="">
        <span className="text-gray-900 regular-14 underline ">Terms and Condition</span>
        
        <span className="text-gray-900 ml-4 regular-14 underline">Privacy Policy</span>
        </div>
        </footer>       
    </div>
  )
}

export default Footer
