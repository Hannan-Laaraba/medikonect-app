import React, { useState, useEffect } from "react";

export default function Review() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState([]);

  const addReview = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('feedback', feedback);

    try {
      const response = await fetch(`http://localhost:5050/profile/:id/reviews`, {
        method: "POST",
        body: formData,
      });
      if (response.status === 201) {
        getReviews();
        // Reset form fields after successful submission
        setName('');
        setFeedback('');
      }
    } catch (error) {
      console.error("Error adding review:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  const getReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5050/profile/:id/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews:", response.statusText);
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <form
        onSubmit={addReview}
        className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            rows="5"
            placeholder="Enter your feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Display reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4 mb-4">
            <p className="text-gray-700 font-semibold">{review.name}</p>
            <p className="text-gray-600">{review.feedback}</p>
          </div>
        ))}
      </div>
    </>
  );
}
