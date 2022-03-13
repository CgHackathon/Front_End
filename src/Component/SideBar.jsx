import React from "react";
import companyLogo from "../Assets/back.jpg";

const Sidebar = ({pageInfo}) => {
  return (
    <div className="col-md-4 mt-2">
      <div className="card text-center sidebar bg-dark text-white bg-opacity-50">
        <div className="card-body">
          <img
            src={companyLogo}
            alt=""
            className="rounded"
            width="250"
          ></img>
          <div className="d-flex flex-column mt-3">
            <h1>Hello {pageInfo.userName}</h1>
            <h5>Email: {pageInfo.email}</h5>
            <h5>Role: {pageInfo.role}</h5>
            <h5>Phone: {pageInfo.phoneNumber}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
