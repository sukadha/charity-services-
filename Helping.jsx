import React, { useState, useEffect } from "react";
import "./Helping.css";
import event1 from "./event-1.png";
import event2 from "./event-2.png";
import event3 from "./event-3.png";
import event4 from "./event-4.png";

const images = [event1, event2, event3, event4]; // Correctly reference the imported images

const Helping = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "visible" : "hidden"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Helping;
