import React from "react";
import "../../App.css";
import beans from "../../images/beans.jpg";
import machine from "../../images/machine.png";
import Footer from "../Footer";

function Repair() {
  return (
    <>
      <header>
        <img id="beans" src={beans} alt="Coffee Machine" />
        <h1>Repair</h1>
      </header>

      <section id="about-owner">
        <p>
          We offer a full range of espresso coffee machine repairs and breakdown
          repairs. Here at Coffee Wizard Services, formerly known as Water
          Wizard Services, we have a wealth of coffee repair experience. Gained
          over 15 years of coffee machine servicing, repairs, breakdown
          resolution, installation, and sales of commercial coffee machines. As
          an independent company, we have knowledge of all major brands and
          models. Think of Coffee Wizard Services and the rapid response coffee
          machine engineer. Having run coffee outlets prior to building a
          business in the service sector, we understand what it is like when
          your coffee espresso machine fails on you in the middle of a busy day.
          Especially for those of you whose primary focus is to supply premium
          coffee. There is nothing worse than your espresso coffee machine being
          out of action or not performing at its best. At best it is annoying,
          however, at worst it could be a loss of revenue.
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
          Join us on a journey where excellence in coffee meets the personal
          touch – Balal Ahmed and Bean to Cup, your trusted partner in crafting
          the perfect coffee experience.
          <br />
        </p>
        <img id="machine" src={machine} alt="Fixing Machine" />
      </section>

      <Footer />
    </>
  );
}

export default Repair;
