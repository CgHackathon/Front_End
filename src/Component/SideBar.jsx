import React, { useEffect, useState } from "react";
import companyLogo from "../Assets/back.jpg";

const Sidebar = () => {
  return (
    <div className="col-md-4 mt-2">
      <div className="card text-center sidebar bg-dark text-white bg-opacity-50">
        <div className="card-body">
          <img
            src={companyLogo}
            alt=""
            className="rounded-circle"
            width="200"
          ></img>
          <div className="mt-3">
            <h1>Hello Ahmed</h1>
            <h5>Email: </h5>
            <h5>City: </h5>
            <h5>Phone: </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
