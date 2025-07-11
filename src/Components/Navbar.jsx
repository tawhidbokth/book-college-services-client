import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Home', 'Colleges', 'Admission', 'My College'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  EduConnect
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-b-2 border-indigo-500 text-gray-900'
                      : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 pb-3 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`block w-full py-2 pl-3 pr-4 text-left text-base font-medium ${
                  activeTab === tab
                    ? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-indigo-50 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border-0 bg-white py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search for a college name..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;