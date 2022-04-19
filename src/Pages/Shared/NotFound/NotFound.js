import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" d-flex-cols text-center mt-5">
      <h1 className="fs-1 text-danger mb-3 font-serif">Oops!</h1>
      <p className="font-bold fs-2 font-serif ">404-PAGE NOT FOUND</p>
      <p className="fs-3 font-serif mt-2">
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
      <Link to="/">
        <button className="border-2 rounded bg-warning fs-2 p-4 font-bold text-white mt-3">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
