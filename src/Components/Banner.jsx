import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <div className="container mx-auto lg:mb-8">
      <div className="banner space-y-8 items-center flex flex-col justify-center">
        <h1>Discover an exceptional cooking class tailored for you!</h1>
        <p>
          Level up your culinary creativity with our personalized cooking
          classes! Whether you're a beginner or a seasoned chef, our expert
          instructors will guide you through an unforgettable culinary journey.
          Improve your skills, discover new flavors, and create mouthwatering
          dishes that reflect your unique tastes. Join us today and embark on a
          delicious adventure tailored just for you!
        </p>
        <div className="flex gap-4 lg:gap-16">
          <button className="btn btn-accent">Explore Now</button>
          <button className="btn btn-outline text-white">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
