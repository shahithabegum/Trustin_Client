import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAll_company } from "../../service/CompanyService";
import { generateNotification } from "../../service/Notification";
import { authservice } from "../../service/AuthService";
import { useFormik } from "formik";
import "./connect.css";

import { toast } from "react-toastify";
const Connect = () => {
  const [company, setCompany] = useState([]);
  const [datalist, setDataList] = useState([]);
  const [email, setEmail] = useState("");
  const Authuser = authservice.getCurrentUser();
  useEffect(() => {
    companyData();
  }, [datalist]);
  //form Initial values
  const formik = useFormik({
    initialValues: {
      message: `${Authuser.username} Wants to Connect`,
      type: "1",
      sender: Authuser.email,
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      handleSubmit();
      resetForm();
    },
  });
  //Generate notification method
  const handleSubmit = () => {
    const data = Object.assign(formik.values, { useremail: email });
    generateNotification(data).then((res) => {
      if (res.data.isSuccess === "true") {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  //getting Company Details
  const companyData = () => {
    getAll_company().then((res) => {
      if (res.data.isSuccess === "true") {
        setCompany(res.data.result);
        const companydata = company.filter((item) => {
          return item.useremail !== Authuser.email;
        });
        setDataList(companydata);
      }
    });
  };
  //filter Company for Search
  const fetchdata = (value) => {
    const result = company.filter((user) => {
      return (
        value &&
        user &&
        user.useremail &&
        user.useremail.toLowerCase().includes(value)
      );
    });
    // console.log(result)
    setDataList(result);
  };
  //cancel method
  const handlechange = (value) => {
    setEmail(value);
    fetchdata(value);
  };
  // console.log(email)
  // console.log(company,"company")
  // console.log(datalist,"datalist")
  return (
    <div>
      <h2 className="Companyheader text-center my-5">
        {" "}
        Connect with another Company{" "}
      </h2>
      <div className=" w-90  my-4">
        <form className="form ml-5 " onSubmit={formik.handleSubmit}>
          <Row className="my-2 col-lg-4 mx-auto">
            <Col>
              <div class="input_wrapper">
                <i class="fa fa-search"></i>
                <input
                  type="text"
                  className=" search_input mx-2"
                  id="search"
                  name="search"
                  placeholder="Search User...."
                  value={email}
                  onChange={(e) => {
                    handlechange(e.target.value);
                  }}
                  required
                />
              </div>
            </Col>
          </Row>
          <Row className="my-2 col-lg-4  mx-auto">
            <Col>
              <div className="list_wrapper mx-auto">
                {datalist.map((item, index) => (
                  <div
                    key={index}
                    className="connnect_list d-flex justify-content-between mt-3"
                    onClick={() => {
                      setEmail(item.useremail);
                    }}
                  >
                    <div className="mx-2">
                      <h6>{item.companyname}</h6>
                      <p>{item.useremail}</p>
                    </div>
                    <div className="mx-2">
                      <button type="submit" className="btn btn-success">
                        connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/commonlayout/landingpage" className="my-3">
                <button className="btn btn-warning w-100 my-3 mx-1">
                  Back
                </button>
              </Link>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Connect;
