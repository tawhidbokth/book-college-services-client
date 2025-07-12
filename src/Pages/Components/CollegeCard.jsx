// src/components/CollegeCard.jsx

import React from "react";

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{college.name}</h2>
        <p><strong>Rating:</strong> ⭐ {college.rating}</p>
        <p><strong>Admission:</strong> {college.admissionDate}</p>
        <p><strong>Research:</strong> {college.researchCount}+ papers</p>
        <button
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert("Redirect to details")}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
