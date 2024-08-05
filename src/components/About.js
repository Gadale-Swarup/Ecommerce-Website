import React from "react";
import "./About.css"
function About() {

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our e-commerce website, where you can find the latest and
        greatest iPhones on the market. Our mission is to provide our customers
        with the best possible shopping experience, with a wide range of products
        to choose from and a user-friendly interface.
      </p>
      <p>
        Our team is dedicated to providing excellent customer service, ensuring
        that every customer is satisfied with their purchase. We strive to make
        our website as easy to use as possible, so you can find what you're
        looking for quickly and easily.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Customer satisfaction is our top priority</li>
        <li>We strive for excellence in everything we do</li>
        <li>We are committed to providing the best possible products and services</li>
      </ul>
      <h2>Get in Touch</h2>
      <p>
        If you have any questions or concerns, please don't hesitate to contact
        us. We're always here to help.
      </p>
      <p>
        Email: <a href="mailto:example@example.com">example@example.com</a>
      </p>
      <p>
        Phone: <a href="tel:123-456-7890">123-456-7890</a>
      </p>
    </div>
  );
}

export default About;