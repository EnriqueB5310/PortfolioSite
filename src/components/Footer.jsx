import React from 'react'
import { VscCoffee } from "react-icons/vsc";

function Footer() {
  return (
    
<footer className="bg-white dark:bg-gray-900">
    
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                 <VscCoffee size={50} color='white' />
                  <span className=" pl-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Enrique Barrios</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
             
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Enrick5310@gmail.com</a>
                      </li>

                       <li>
                          <a href="" className="hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
             
          </div>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500  sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Enrique Barrios</a>. No Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              
                  
             
          </div>
      </div>
    </div>
</footer>


  )
}

export default Footer