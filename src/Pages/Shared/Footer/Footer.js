import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light mt-5  ps-5 pe-3 pt-3 footer">
      <div>
        <h1>Services</h1>
        <ul className="list-unstyled">
          <li>Arthroscopy</li>
          <li>Joint replacement surgery</li>
          <li> Spine Surgery</li>
          <li>Paediatric Orthopaedics</li>
          <li>Trauma and Accident Care</li>
          <li> Plastic & Hand Surgery Treatment</li>
          <li> Physiotherapy</li>
        </ul>
      </div>
      <div>
        <h1>Contact Info</h1>
        <ul className="list-unstyled">
          <li>
            <p>Call Anytime at: +91 6374774207</p>
          </li>
          <li>
            <p>Land Line No: 0422-2572573</p>
          </li>
          <li>
            <p>Fax: 0422-2572207</p>
          </li>
          <li>
            <p>Email: contact@vgmorthocentre.com</p>
          </li>
        </ul>
      </div>
      <div className=" align-items-center justify-content-center">
        <h2>
          OP Appointment Timing <span> Mon-Fri: 9:00am-8:00pm</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
