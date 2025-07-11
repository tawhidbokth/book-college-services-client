import {
  AcademicCapIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '@heroicons/react/24/outline';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Colleges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Admission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookmarkIcon className="h-5 w-5 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Application Forms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Campus Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Alumni
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  admissions@collegefinder.edu
                </span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-gray-300">
                  123 Education Blvd
                  <br />
                  Boston, MA 02115
                </address>
              </li>
              <li className="flex items-start">
                <ClockIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon-Fri: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for admission updates and college
              news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">YouTube</span>
                  <YoutubeIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CollegeFinder. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
