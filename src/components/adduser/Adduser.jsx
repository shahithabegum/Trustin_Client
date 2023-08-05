import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { create_company } from "../../service/CompanyService";
import { getAll_user } from "../../service/UserService";
import { toast } from "react-toastify";
import { authservice } from "../../service/AuthService";
import "./adduser.css";
import { generateNotification } from "../../service/Notification";
const Adduser = () => {
  let navigate = useNavigate();
  const user = authservice.getCurrentUser();
  const Authuser = authservice.getCurrentCompany();
  const [useremail, setUseremail] = useState("");
  const [company, setCompany] = useState([]);
  const [datalist, setDataList] = useState([]);
  useEffect(() => {
    companyData();
  }, []);
  //form Initial values
  const formik = useFormik({
    initialValues: {
      companyname: Authuser.companyname,
      companywebsite: Authuser.companywebsite,
      companylocation: Authuser.companylocation,
      profileimgae: Authuser.profileimgae,
      message: `${user.username} Added a Company`,
      type: "2",
    },

    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      handleSubmit();
      resetForm();
    },
  });

  const companyData = () => {
    getAll_user().then((res) => {
      if (res.data.isSuccess === "true") {
        setDataList(res.data.result);
        setCompany(res.data.result);
      }
    });
  };
  //Create new Company for the user
  const handleSubmit = () => {
    const data = Object.assign(formik.values, { useremail: useremail });
    create_company(data).then((res) => {
      if (res.data.isSuccess === "true") {
        generateNotification(data).then((res) => {
          if (res.data.isSuccess === "true") {
            console.log("notification sent", res.data);
          }
        });

        navigate("/commonlayout/landingpage");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  //Cancel Method
  const handleCancel = () => {
    navigate("/commonlayout/landingpage");
  };
  //filter Method for search
  const fetchdata = (value) => {
    const result = company.filter((user) => {
      return (
        value && user && user.email && user.email.toLowerCase().includes(value)
      );
    });
    setDataList(result);
  };

  //handleChange method
  const handlechange = (value) => {
    setUseremail(value);
    fetchdata(value);
  };
  // console.log("company",company)

  //disable property setup
  const enable = useremail !== "";
  return (
    <div>
      <h2 className="Companyheader text-center my-4">
        {" "}
        Add User To Your Company{" "}
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
                  value={useremail}
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
                    className="searchlist"
                    onClick={() => {
                      setUseremail(item.email);
                    }}
                  >
                    {item.email}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className=" mx-2 my-1 justify-content-center">
            <Col lg={2} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-info w-100  my-2"
                type="submit"
                disabled={!enable}
              >
                Add user
              </button>
            </Col>
            <Col lg={2} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-danger w-100  my-2"
                type="button"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
