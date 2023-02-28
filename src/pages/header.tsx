import React from 'react'

const Header = () => {
  return (
    <header className="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
        <h3 className="text-2xl font-bold"><span className="text-[hsl(280,100%,70%)]">JaaS</span></h3>
        </div>
        <div className="sm:hidden">
          <button type="button" className="text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className="hidden fill-current" fillRule="evenodd" clipRule="evenodd" d="M4.5 6H19.5V8.25H4.5V6ZM4.5 11.25H19.5V13.5H4.5V11.25ZM4.5 16.5H19.5V18.75H4.5V16.5Z" />
              <path className="block fill-current" fillRule="evenodd" clipRule="evenodd" d="M13.5 6H19.5V8.25H13.5V6ZM13.5 11.25H19.5V13.5H13.5V11.25ZM13.5 16.5H19.5V18.75H13.5V16.5ZM4.5 6H10.5V8.25H4.5V6ZM4.5 11.25H10.5V13.5H4.5V11.25ZM4.5 16.5H10.5V18.75H4.5V16.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Home</a>
        <a href="#" className="block px-2 py-1 text-gray-500 rounded hover:text-white hover:bg-gray-700 sm:mt-0 sm:ml-2">About</a>
        <a href="#" className="block px-2 py-1 text-gray-500 rounded hover:text-white hover:bg-gray-700 sm:mt-0 sm:ml-2">Contact</a>
      </nav>
    </header>
  )
}

export default Header;
