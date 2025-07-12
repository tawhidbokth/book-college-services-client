// src/pages/Colleges.jsx

import React from 'react';
import CollegeCard from './Components/CollegeCard';

const colleges = [
  {
    id: 1,
    name: 'Harvard University',
    rating: 4.9,
    admissionDate: 'Aug 15 – Sep 30',
    researchCount: 128,
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Oxford International',
    rating: 4.7,
    admissionDate: 'Jul 20 – Aug 31',
    researchCount: 95,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Stanford College',
    rating: 4.8,
    admissionDate: 'Aug 1 – Sep 15',
    researchCount: 110,
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'MIT',
    rating: 5.0,
    admissionDate: 'Sep 1 – Oct 10',
    researchCount: 150,
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Dhaka University',
    rating: 4.5,
    admissionDate: 'Aug 10 – Sep 25',
    researchCount: 80,
    image:
      'https://images.unsplash.com/photo-1605648198578-7b1c2a5c58cd?auto=format&fit=crop&w=800&q=80',
  },
];

const Colleges = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Colleges</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {colleges.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
