import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-16 px-6 md:px-12 rounded-xl  overflow-hidden shadow-lg">
        {/* Background decoration - more modern abstract shapes */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-700 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-700 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-20 w-48 h-48 bg-indigo-400 rounded-full opacity-10 pointer-events-none"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnYxNmgxNnY0aDE2di0xNnYtMTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Text content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Your Perfect{' '}
              <span className="text-indigo-200">College</span> Match
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Explore top-ranked institutions, admission requirements, campus
              life, and scholarship opportunities - all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 transform hover:scale-[1.02] active:scale-95">
                Browse Colleges
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 transform hover:scale-[1.02] active:scale-95">
                Admission Guide
              </button>
            </div>
          </div>

          {/* Image or Illustration */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="relative">
              <img
                src="/college-banner.jpg"
                alt="Students on campus"
                className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white border-opacity-20 transform rotate-1 hover:rotate-0 transition duration-500"
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md font-bold">
                +2,500 Colleges
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-6 left-6 flex gap-4 text-sm opacity-80">
          <div className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
            Trusted by 50K+ students
          </div>
          <div className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
            100+ Universities
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
