import React from "react";
import img from "../About/img.jpg";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div>
      <div className="container d-flex justify-space-evenly">
        <div className="mt-5">
          <h1 className="text-info fs-1">I am Md Emran Hossan </h1>
          <p className="text-bold fs-4">I am a Junior React Developer</p>
        </div>
        <div className="ms-5 ps-5 ">
          <Image img-fluid roundedCircle src={img} alt="" />
        </div>
      </div>
      <div className="container">
        <h1 className="text-info fs-1">Goals</h1>
        <p className="text-bold fs-4">
          Junior React.js engineer for hire is in great demand nowadays due to
          the scarcity of web developers with React JS skill set.
          <ul>
            <li>
              Strong knowledge of basic web technologies such as HTML, CSS,
              Bootstrap, and others.
            </li>
            <li>
              In-depth knowledge of JavaScript, React JS, jQuery, Angular, Vue
              JS, and other languages.
            </li>
            <li>
              Knowledge of database platforms such as MongoDB, PostgreSQL,
              Firebase, Redis, SQLite, and others.
            </li>
            <li>
              Working knowledge of Linux, Windows, Docker, AWS, Microsoft Azure,
              and other.
            </li>
            <li>
              Knowledge of software development, basic testing, and agile
              development methodology
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
