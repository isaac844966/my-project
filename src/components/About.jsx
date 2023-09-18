import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 item-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-500 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            nobis voluptatibus veniam consequuntur cumque sequi, hic ratione
            repellendus neque minus harum soluta accusamus debitis reiciendis
            doloribus similique nisi excepturi distinctio?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
