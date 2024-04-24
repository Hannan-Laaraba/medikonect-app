import React, { useEffect, useState } from "react";


export default function Reviews(){

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        //fetch from backend
        const url = new URL (`${process.env.MEDIKONECT_API}/reviews`);

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setReviews(data.Reviews);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
     },[]);


    return(
        <>
        
        </>
    )
}