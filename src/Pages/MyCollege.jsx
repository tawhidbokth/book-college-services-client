import React, { useState } from 'react';

const MyCollege = () => {
  // Sample submitted college data - পরবর্তীতে API থেকে নিবেন
  const [collegeInfo] = useState({
    name: 'Harvard University',
    admissionDate: 'Aug 15 – Sep 30',
    subject: 'Computer Science',
  });

  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, comment: 'Excellent college with great faculty.' },
    { id: 2, rating: 4, comment: 'Good research opportunities.' },
  ]);

  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const handleReviewChange = e => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = rating => {
    setNewReview({ ...newReview, rating });
  };

  const handleReviewSubmit = e => {
    e.preventDefault();
    if (newReview.rating === 0 || newReview.comment.trim() === '') {
      alert('Please provide rating and comment');
      return;
    }
    setReviews([...reviews, { id: Date.now(), ...newReview }]);
    setNewReview({ rating: 0, comment: '' });
  };

  // Simple star rating UI
  const Star = ({ filled, onClick }) => (
    <svg
      onClick={onClick}
      className={`w-6 h-6 cursor-pointer ${
        filled ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.386 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.612 9.4c-.783-.57-.38-1.81.588-1.81h4.181a1 1 0 00.95-.69l1.287-3.974z" />
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My College Details
      </h2>

      <div className="mb-8 border border-gray-200 rounded p-4">
        <h3 className="text-2xl font-semibold mb-2">{collegeInfo.name}</h3>
        <p>
          <strong>Admission Date:</strong> {collegeInfo.admissionDate}
        </p>
        <p>
          <strong>Subject:</strong> {collegeInfo.subject}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Add Your Review</h3>

        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                filled={star <= newReview.rating}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>

          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleReviewChange}
            rows="4"
            placeholder="Write your review here..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map(rev => (
              <li key={rev.id} className="border border-gray-200 rounded p-4">
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} filled={star <= rev.rating} />
                  ))}
                </div>
                <p>{rev.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyCollege;
