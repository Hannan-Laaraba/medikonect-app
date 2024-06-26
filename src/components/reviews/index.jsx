import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    //fetch from backend
    const url = new URL(`http://localhost:5050/reviews`);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data.Reviews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <form
      onSubmit={setReviews} 
      class="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded">
        <h2 class="text-2xl font-bold mb-4">Leave A Review</h2>
        <div class="mb-4">
          <label for="name" class="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Rating</label>
          <div class="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              id="rating1"
              value="1"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label for="rating1">1</label>
            <input
              type="radio"
              name="rating"
              id="rating2"
              value="2"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label for="rating2">2</label>
            <input
              type="radio"
              name="rating"
              id="rating3"
              value="3"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label for="rating3">3</label>
            <input
              type="radio"
              name="rating"
              id="rating4"
              value="4"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label for="rating4">4</label>
            <input
              type="radio"
              name="rating"
              id="rating5"
              value="5"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label for="rating5">5</label>
          </div>
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}
