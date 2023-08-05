import React, { useEffect, useState } from "react";
import { authservice } from "../../service/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { getbyuser_company } from "../../service/CompanyService";
import "./network.css";
const Network = () => {
  const [company, setCompany] = useState([]);
  let navigate = useNavigate();

  const Authuser = authservice.getCurrentUser();

  useEffect(() => {
    getCompany();
  }, []);

  //Geting User Connected company details
  const getCompany = () => {
    getbyuser_company(Authuser.email).then((res) => {
      if (res.data.isSuccess === "true") {
        setCompany(res.data.result.network);
      }
    });
  };

  //Logout method
  const handleLogout = () => {
    authservice.handleLogout(navigate);
  };

  return (
    <div className="container-fluid">
      <header className="networkhead">
        <div className="d-flex justify-content-between mx-2 ">
          <Link
            className="py-3"
            style={{ textDecoration: "none", color: "black" }}
            to="#"
          >
            {Authuser.username}
          </Link>
          <Link
            className="py-3"
            to="/commonlayout/edituser"
            style={{ textDecoration: "none", color: "red" }}
          >
            Edit
          </Link>
        </div>
      </header>
      <div className="network-list">
        <ul className="list">
          {company.map((item, index) => (
            <li key={index} className="connectionlist">
              <b className="px-2">{item.companyname}</b>
              <p className="px-2">{item.user}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer style={{ backgroundColor: "#ECF2FF" }}>
        <div className="text-center">
          <Link
            to="/commonlayout/password"
            style={{ textDecoration: "none", color: "black" }}
          >
            Change Password
          </Link>
        </div>
        <button
          className="btn btn-info w-100 "
          style={{ backgroundColor: "#ECF2FF", border: "none" }}
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Network;
