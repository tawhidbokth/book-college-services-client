import {
  CheckCircleIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export function AdmissionRequirements() {
  const requirements = [
    {
      title: 'Application Documents',
      items: [
        'Completed application form',
        'Official transcripts',
        'Personal statement (500-1000 words)',
        'Letters of recommendation (2 required)',
      ],
      icon: DocumentTextIcon,
    },
    {
      title: 'Academic Requirements',
      items: [
        'Minimum 3.0 GPA (4.0 scale)',
        'SAT score 1200+ or ACT 25+',
        'TOEFL 90+ or IELTS 6.5+ (international students)',
        'Completion of prerequisite courses',
      ],
      icon: AcademicCapIcon,
    },
    {
      title: 'Additional Materials',
      items: [
        'Portfolio (for arts programs)',
        'Research proposals (for STEM programs)',
        'Extracurricular activity list',
        'Interview (by invitation)',
      ],
      icon: UserGroupIcon,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Admission Requirements
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Everything you need to prepare for your application
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {requirements.map(requirement => (
            <div
              key={requirement.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                  <requirement.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  {requirement.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {requirement.items.map(item => (
                  <li key={item} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-indigo-800">
                Important Note
              </h3>
              <div className="mt-2 text-sm text-indigo-700">
                <p>
                  Requirements may vary by program. Deadlines differ for early
                  decision (November 1) and regular decision (January 15).
                  Contact our admissions office for specific program
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionRequirements;
