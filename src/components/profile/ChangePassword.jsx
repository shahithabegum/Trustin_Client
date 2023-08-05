import React from "react";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { change_Password } from "../../service/UserService";
import ChangepasswordValidation from "./ChangepasswordValidation";
const ChangePassword = () => {
  let navigate = useNavigate();

  //form Initial values
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    //form validation using yup
    validationSchema: ChangepasswordValidation,

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSubmit();
      resetForm();
    },
  });
  //change password method
  const handleSubmit = () => {
    change_Password(formik.values).then((response) => {
      console.log(response.data);
      if (response.data.isSuccess === "true") {
        navigate("/commonlayout/landingpage");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    });
  };
  //cancel method
  const handleCancel = () => {
    navigate("/commonlayout/landingpage");
  };

  //disable property setup
  const enable = formik.values.password === formik.values.confirmpassword;
  return (
    <div>
      <h1 className="text-center  pt-5">Edit Profile</h1>
      <div className="formcontainer  my-3">
        <form className="form ml-5" onSubmit={formik.handleSubmit}>
          <Row className="my-1">
            <Col>
              <div class="form-group">
                <label for="email" className="label my-1 company-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control "
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
                <label for="password" className="label my-1 company-label">
                  New Password
                </label>
                <input
                  type="Password"
                  className="form-control "
                  id="password"
                  name="password"
                  placeholder="Enter Mail Id"
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
                <label
                  for="confirmpassword"
                  className="label my-1 company-label"
                >
                  Confirm Password
                </label>
                <input
                  type="Password"
                  className="form-control "
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Enter Mail Id"
                  {...formik.getFieldProps("confirmpassword")}
                />
              </div>
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
              ) : null}
            </Col>
          </Row>
          <Row className=" mx-2 my-1 justify-content-center">
            <Col lg={4} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-info w-100  my-2"
                type="submit"
                disabled={!enable}
              >
                Change
              </button>
            </Col>
            <Col lg={4} md={6} sm={12} ml={0}>
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

export default ChangePassword;
