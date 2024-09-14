import React from 'react';
import '../styles/footer.css';
import envelopeImage from '../images/envelope-outline.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img"></div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src={envelopeImage} alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                Trip-To-<span>Sikkim</span>
              </a>
            </div>
            <p className="mb-4">
              At Trip-To-Sikkim, we are passionate about showcasing the natural beauty and rich culture of Sikkim. Our dedicated team of travel experts is committed to providing personalized and unforgettable experiences, from majestic mountain views to vibrant local festivals.
            </p>
            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="/about">About us</a></li>
                  <li><a href="/booking">Booking</a></li>
                  <li><a href="/packages">Packages</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="">Support</a></li>
                  <li><a href="/location">Blogs</a></li>
                  <li><a href="">Live chat</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="/location">Locations</a></li>
                  <li><a href="#">Gangtok</a></li>
                  <li><a href="#">West Sikkim</a></li>
                  <li><a href="#">North Sikkim</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#">Travel</a></li>
                  <li><a href="#">Help Line</a></li>
                  <li><a href="https://police.sikkim.gov.in/visitors">Sikkim Police</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. Designed with love by{' '}
                <a href="https://waglogy.in">Waglogy</a>
              </p>
            </div>

            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
