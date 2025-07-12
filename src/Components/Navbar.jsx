import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import AouthContext from '../Provider/AouthContext';

const Navbar = () => {
  const { user, signOutUser } = useContext(AouthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  // Mock function for college search - replace with your actual search logic
  const handleSearch = (e) => {
    e.preventDefault();
    // This is a mock implementation - replace with your actual search logic
    const mockColleges = [
      { id: 1, name: 'Harvard University', location: 'Cambridge, MA' },
      { id: 2, name: 'Stanford University', location: 'Stanford, CA' },
      { id: 3, name: 'MIT', location: 'Cambridge, MA' },
    ];
    
    const results = mockColleges.filter(college => 
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const navLinks = (
    <>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/" className="hover:text-orange-500">
          Home
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/colleges" className="hover:text-orange-500">
          Colleges
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/admission" className="hover:text-orange-500">
          Admission
        </NavLink>
      </li>
      <li className="my-2 lg:my-0 lg:mx-4">
        <NavLink to="/my-college" className="hover:text-orange-500">
          My College
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-gray-300 font-bold  w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4 px-6">
        {/* Logo and Main Nav */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.ibb.co/3dLVZ1x/DALL-E-2024-12-25-08-39-19-A-luxurious-golden-logo-design-for-a-restaurant-named-Savory-Delight-The.webp"
              alt="College Finder"
            />
            <span className="text-xl font-bold ml-3">College Finder</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center">{navLinks}</ul>
        </nav>

        {/* User Section */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4">
          {user ? (
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Sign Out
              </button>
              <div className="relative z-10">
                <div className="avatar cursor-pointer" onClick={toggleDropdown}>
                  <div className="w-14 rounded-full">
                    <img src={user.photoURL} alt="User Profile" />
                  </div>
                </div>
                {showDropdown && (
                  <div className="absolute w-[150px] right-0 mt-2 bg-white text-black shadow-lg rounded">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden navbar-end w-full shadow-lg">
            <ul className="menu w-full p-4">
              {navLinks}
              <div className="text-white rounded">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  Dashboard
                </Link>
              </div>
            </ul>
            <div className="flex flex-col items-center gap-4 mt-4">
              {user ? (
                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                  >
                    Sign Out
                  </button>
                  <div className="relative z-10">
                    <div
                      className="avatar cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <div className="w-14 rounded-full">
                        <img src={user.photoURL} alt="User Profile" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="bg-gray-800 py-3 px-6">
        <form onSubmit={handleSearch} className="container mx-auto flex">
          <input
            type="text"
            placeholder="Search for a college..."
            className="flex-grow px-4 py-2 rounded-l focus:outline-none text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r flex items-center"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="container mx-auto px-6 py-4 bg-white text-black shadow-lg">
          <h3 className="font-bold mb-2">Search Results:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map(college => (
              <div key={college.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-bold">{college.name}</h4>
                <p className="text-sm text-gray-600">{college.location}</p>
                <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <ToastContainer />
    </header>
  );
};

export default Navbar;