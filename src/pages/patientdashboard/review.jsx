import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Review() {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    rating: "",
    reviewMessage: "",
  });

  // const [reviews, setReviews] = useState([
  //   {
  //     id: 1,
  //     name: "Ashrawee",
  //     doctor: "Dr. Apo-era",
  //     rating: 4,
  //     reviewMessage: "Excellent service!",
  //   },
  //   {
  //     id: 2,
  //     name: "Laaraba",
  //     doctor: "Dr. Fredericka",
  //     rating: 5,
  //     reviewMessage: "Highly recommended!",
  //   },
  // ]);

  //using json data

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newReview = {
  //     id: reviews.length + 1,
  //     ...formData,
  //   };
  //   setReviews([...reviews, newReview]);
  //   setFormData({
  //     name: "",
  //     doctor: "",
  //     rating: "",
  //     reviewMessage: "",
  //   });
  // };

  //fetching from backend
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get (`${process.env.MEDIKONECT_API}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.MEDIKONECT_API}/reviews`, formData);
      setReviews([...reviews, response.data]);
      setFormData({
        name: "",
        doctor: "",
        rating: "",
        reviewMessage: "",
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Existing Reviews</h2>
        <div className="divide-y divide-gray-300">
          {reviews.map((review) => (
            <div key={review.id} className="py-4">
              <p className="text-base font-semibold">Name: {review.name}</p>
              <p className="text-base">Doctor: {review.doctor}</p>
              <p className="text-base">Rating: {review.rating}</p>
              <p className="text-base">Review: {review.reviewMessage}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-[850px] text-[#27115f] bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctor" className="block mb-1">
            Doctor
          </label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Rating</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <React.Fragment key={rating}>
                <input
                  type="radio"
                  name="rating"
                  id={`rating${rating}`}
                  value={rating}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor={`rating${rating}`}>{rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="reviewMessage"
            value={formData.reviewMessage}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}
