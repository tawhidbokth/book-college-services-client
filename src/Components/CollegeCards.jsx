import React from 'react';

const colleges = [
  {
    id: 1,
    name: 'Oxford International College',
    admissionDates: 'Aug 1 - Sep 30',
    events: ['Orientation', 'Workshop'],
    research: 'AI and Robotics',
    sports: ['Football', 'Basketball'],
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Harvard University',
    admissionDates: 'Sep 1 - Oct 15',
    events: ['Seminars', 'Alumni Meet'],
    research: 'Medical Sciences',
    sports: ['Tennis', 'Swimming'],
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Stanford College',
    admissionDates: 'Jul 15 - Aug 31',
    events: ['Tech Fest', 'Career Fair'],
    research: 'Computer Science',
    sports: ['Baseball', 'Track'],
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
  },
];

export function CollegeCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured Colleges
        </h2>
        <p className="mt-3 text-xl text-gray-500">
          Discover leading institutions worldwide
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map(college => (
          <div
            key={college.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                {college.name}
              </h3>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">
                    Admission: {college.admissionDates}
                  </span>
                </div>

                <div className="flex items-start mb-2">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Events:</p>
                    <p className="text-sm text-gray-600">
                      {college.events.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Sports:</p>
                    <p className="text-sm text-gray-600">
                      {college.sports.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                View Details
                <svg
                  className="w-4 h-4 inline ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CollegeCards;
