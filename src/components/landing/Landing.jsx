import React, { useEffect, useState } from "react";
import images from "../../assets/defaultcoverpic.png";
import { get_user } from "../../service/UserService";
import { authservice } from "../../service/AuthService";
import { getbyuser_company } from "../../service/CompanyService";
import "./landing.css";

const Landing = () => {
  const [user, setUser] = useState([]);
  const [company, setCompany] = useState([]);
  const Authuser = authservice.getCurrentUser();
  useEffect(() => {
    getUser();
    getCompany();
  }, []);
  console.log(Authuser._id);

  //geting user details of current user
  const getUser = () => {
    get_user(Authuser._id).then((res) => {
      if (res.data.isSuccess === "true") {
        setUser(res.data.result);
      }
    });
  };
  //getting comapany details of current user
  const getCompany = () => {
    getbyuser_company(Authuser.email).then((res) => {
      if (res.data.isSuccess === "true") {
        authservice.setCurrentCompany(res.data.result);
        setCompany(res.data.result);
      }
    });
  };
  //company profileimage
  const coverimg = `https://trustin-server.onrender.com/${company.profileimgae}`;
  //user profileimage
  const dpimg = `https://trustin-server.onrender.com/${user.profileimg}`;

  return (
    <div>
      <div className="container">
        <div className="header">
          {company.profileimgae ? (
            <img
              src={coverimg}
              alt="coverpic"
              className="img-fluid  landingimg"
            />
          ) : (
            <img
              src={images}
              alt="coverpic"
              className="img-fluid  landingimg"
            />
          )}

          <div className="profileimg">
            <img src={dpimg} alt="coverpic" className="img-fluid dp" />
          </div>
        </div>
        <div>
          <div className="content my-5 mx-auto d-flex justify-content-between">
            <div>
              <p>
                <b>Name :</b> {user.username}
              </p>
              <p>
                <b>Email :</b> {user.email}
              </p>
            </div>
            <div className="">
              <p>
                <b>Company Name : </b>
                {company.companyname}
              </p>
              <p>
                <b>Website :</b> {company.companywebsite}
              </p>
            </div>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dolorum accusamus veritatis vero praesentium expedita consequatur
            fugit. Expedita commodi, perspiciatis facilis, pariatur unde, enim
            illum porro fuga nulla magnam laudantium. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Deserunt dolorum accusamus
            veritatis vero praesentium expedita consequatur fugit. Expedita
            commodi, perspiciatis facilis, pariatur unde, enim illum porro fuga
            nulla magnam laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
