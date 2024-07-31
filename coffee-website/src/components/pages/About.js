import React from "react";
import "../../App.css";
import about from "../../images/about.jpg";
import signature from "../../images/signature.png";
import coffee2 from "../../images/coffee2.png";
import Footer from "../Footer";

function About() {
  return (
    <>
      <header>
        <img id="about" src={about} alt="Coffee Machine" />
        <h1>About Us</h1>
      </header>

      <section id="about-owner">
        <p>
          Welcome to Bean to Cup, your gateway to unparalleled espresso
          expertise, proudly owned by Balal Ahmed and rooted in the vibrant city
          of Bradford. With over 10 years of rich industry experience, Bean to
          Cup focuses on the sales, installation, and meticulous service and
          repair of traditional commercial coffee machines. Understanding the
          challenges that arise when your coffee or espresso machine falters in
          the midst of a bustling day, Balal takes pride in a customer-centric
          approach. He is committed to providing you with precisely what you
          need, when you need it, without any unnecessary upselling.
          <br />
          <br />
          In the rare event that an on-site repair is not feasible, Bean to Cup
          seamlessly steps in, offering a loan machine to ensure your business
          continues to run smoothly. Your machine is then expertly repaired
          off-site and promptly returned, minimizing any disruption to your
          operations. At Bean to Cup, the commitment extends beyond mere
          repairs; an annual service and assessment guarantee that your machine
          operates at its full potential, consistently delivering the perfect
          espresso.
          <br />
          <br />
          Join us on a journey where excellence in coffee meets the personal
          touch – Balal Ahmed and Bean to Cup, your trusted partner in crafting
          the perfect coffee experience.
          <br />
          <img id="signature" src={signature} alt="Balal's Signature" />
        </p>
        <img id="coffee2" src={coffee2} alt="Fixing Machine" />
      </section>

      <Footer />
    </>
  );
}

export default About;
