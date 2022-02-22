import React from "react";
import miPhoto from "../assets/img/mi-foto.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__name">Vasya Pupkin</div>
      <div className="about__title">Блог фронтенд-разработчика</div>
      <img className="about__photo" src={miPhoto} alt="photo" />
      <div className="about__me">Обо мне</div>
      <div className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam
        accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla
        sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet
        amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada
        non nisi.
      </div>
    </div>
  );
};

export default About;
