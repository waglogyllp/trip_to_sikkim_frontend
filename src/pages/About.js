import React from 'react';
import Slider from 'react-slick';
import truck from '../images/truck.svg';
import support from '../images/support.svg';
import retu from '../images/return.svg';
import bag from '../images/bag.svg';
import heroabo from '../images/3.png';
import aboutImage from '../images/heroc.png';
import user from '../images/user.svg';
import hero1 from '../images/a_hero1.png';
import hero2 from '../images/hero2.png';
import '../styles/global.css';
import teamimg from '../images/team.png'

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const About = () => {
  return (
    <div className="about-us-section">
   
     

      <div className="container">
        {/* Content below the slider */}
        <section className="mt-16 md:mt-28 p-4">
      <div className="flex flex-col md:flex-row h-auto md:h-96 text-black  shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center p-0 mb-8 md:mb-0">
          <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect Ratio for 16:9 */}
            <video
              className="absolute top-0 left-0 w-full h-full"
              src={`${process.env.PUBLIC_URL}/my-video.mp4`} // Adjust the path if your video is in a different folder
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-4 md:p-20">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-6 text-base md:text-lg">
            Welcome to Trip-To-Sikkim, your ultimate travel companion to explore the mesmerizing beauty of Sikkim. Our mission is to provide you with an unforgettable adventure through the pristine landscapes, vibrant culture, and serene ambiance of Sikkim. We offer tailored packages to suit your preferences, ensuring a seamless and enriching travel experience. Join us to discover hidden gems, indulge in local delicacies, and create memories that last a lifetime.
          </p>
        </div>
      </div>
    </section>
      </div>

      <br />
      <br />

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              At Trip-To-Sikkim, we pride ourselves on delivering exceptional travel experiences with a personal touch. Here’s why you should choose us for your Sikkim adventure:
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img
                      src={truck}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <h3>Seamless Travel Planning</h3>
                  <p>
                    From planning your itinerary to managing your bookings, we handle every detail so you can enjoy a stress-free trip.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img
                      src={bag}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <h3>Tailored Itineraries</h3>
                  <p>
                    Our itineraries are customized to fit your interests and preferences, ensuring a unique and personal travel experience.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img
                      src={support}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <h3>24/7 Customer Support</h3>
                  <p>
                    We offer round-the-clock support to assist you with any queries or issues, ensuring a smooth and enjoyable journey.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img
                      src={retu}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <h3>Hassle-Free Booking</h3>
                  <p>
                    Enjoy an easy and straightforward booking process with transparent pricing and no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img
                src={heroabo}
                alt="Sikkim Adventure"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
<br></br>
      
    </div>
  );
};

export default About;
