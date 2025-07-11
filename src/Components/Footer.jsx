import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            CollegeBooking
          </h3>
          <p className="text-sm leading-relaxed">
            Discover and book your favorite colleges easily. Stay updated with
            admissions, events, and latest research.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/colleges" className="hover:text-blue-400 transition">
                Colleges
              </a>
            </li>
            <li>
              <a href="/admission" className="hover:text-blue-400 transition">
                Admission
              </a>
            </li>
            <li>
              <a href="/my-college" className="hover:text-blue-400 transition">
                My College
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p className="text-sm">123 College St, Education City</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Email: info@collegebooking.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.58 8.58 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.15 12.15 0 01-8.83-4.48 4.29 4.29 0 001.32 5.72 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97 8.6 8.6 0 01-5.33 1.84A8.75 8.75 0 012 19.54a12.13 12.13 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0022.46 6z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.43 20h-2.92v-9h2.92zm-1.45-10.28a1.68 1.68 0 110-3.36 1.68 1.68 0 010 3.36zm13.43 10.28h-2.91v-4.91c0-1.17-.42-1.97-1.46-1.97-.8 0-1.27.54-1.48 1.06-.08.2-.1.47-.1.75v5.07h-2.91v-9h2.79v1.23h.04a3 3 0 012.7-1.49c1.96 0 3.43 1.28 3.43 4.04z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CollegeBooking. All rights reserved.
      </div>
    </footer>
  );
}
