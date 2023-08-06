import React from "react";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../../service/Auth";
import ProfileValidation from "./ProfileValidation";
const Signup = () => {
  let navigate = useNavigate();
  //form Initial values
  const formik = useFormik({
    initialValues: {
      username: "",
      phoneno: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    //form validation using yup
    validationSchema: ProfileValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
      resetForm();
    },
  });
  //signup method
  const handleSubmit = (values) => {
    signup(values).then((response) => {
      console.log(response.data);
      if (response.data.isSuccess === "true") {
        navigate("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    });
  };
  return (
    <div className="logincontainer">
      <h1 className="text-center log-h1 pt-3">Sign Up</h1>
      <div className="formcontainer  my-3">
        <form className="form ml-5" onSubmit={formik.handleSubmit}>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="username" className="label my-1">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control login-input"
                  id="username"
                  name="usernamei"
                  placeholder="Enter Your Name"
                  {...formik.getFieldProps("username")}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <p style={{ color: "red" }}>{formik.errors.username}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="email" className="label my-1">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="email"
                  name="emailid"
                  placeholder="Enter Mail Id"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="phoneno" className="label my-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control login-input"
                  id="phoneno"
                  name="phonenoid"
                  placeholder="Enter Mail Id"
                  {...formik.getFieldProps("phoneno")}
                />
              </div>
              {formik.touched.phoneno && formik.errors.phoneno ? (
                <p style={{ color: "red" }}>{formik.errors.phoneno}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="password" className="label my-1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="password"
                  placeholder="Enter Password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="confirmpassword" className="label my-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="confirmpassword"
                  placeholder="Enter confirmpassword"
                  {...formik.getFieldProps("confirmpassword")}
                />
              </div>
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="mb-3 ">
            <Col lg={12} md={12} sm={12} className="text-end">
              <Link to="/" className="link ">
            
                Already a member ? LogIn
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="btn  btn-primary ">Submit</button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Signup;
