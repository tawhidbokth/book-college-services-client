import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export function AdmissionEvents() {
  const events = [
    {
      id: 1,
      title: 'Virtual Open House',
      date: 'June 15, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'Online',
      description: 'Interactive sessions with faculty and current students',
      college: 'Oxford International College',
    },
    {
      id: 2,
      title: 'Campus Tour Day',
      date: 'June 22, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Campus',
      description: 'Guided tours of facilities and dormitories',
      college: 'Harvard University',
    },
    {
      id: 3,
      title: 'STEM Program Showcase',
      date: 'July 5, 2023',
      time: '1:00 PM - 5:00 PM',
      location: 'Science Building',
      description: 'Demonstrations of our cutting-edge research labs',
      college: 'Stanford College',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Admission Events
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Mark your calendar for these important dates
          </p>
        </div>

        <div className="flow-root">
          <ul className="-mb-8">
            {events.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== events.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-8 ring-white">
                        <CalendarDaysIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-lg font-medium text-gray-900">
                          {event.title}{' '}
                          <span className="text-sm font-normal text-gray-500">
                            at {event.college}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {event.description}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <ClockIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="mr-4">
                            {event.date} • {event.time}
                          </span>
                          <MapPinIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            View All Events
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdmissionEvents;
