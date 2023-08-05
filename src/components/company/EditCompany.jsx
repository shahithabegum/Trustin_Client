import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { update_company, upload } from "../../service/CompanyService";
import { authservice } from "../../service/AuthService";
import CompanyValidation from "./CompanyValidation";
const EditCompany = () => {
  let navigate = useNavigate();
  const company = authservice.getCurrentCompany();
  const [profileimgae, setProfileimgae] = useState(company.profileimgae);
  //form Initial values
  const formik = useFormik({
    initialValues: {
      companyname: company.companyname,
      companywebsite: company.companywebsite,
      useremail: company.useremail,
      companylocation: company.companylocation,
    },
    //form validation using yup
    validationSchema: CompanyValidation,
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      handleSubmit();
      resetForm();
    },
  });
  //Edit Company method
  const handleSubmit = () => {
    const data = Object.assign(formik.values, { profileimgae: profileimgae });
    update_company(company._id, data).then((res) => {
      if (res.data.isSuccess === "true") {
        navigate("/commonlayout/landingpage");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  };
  //Image Uplad method
  const handleUpload = (e) => {
    let file = e.target.files[0];
    let formdata = new FormData();
    formdata.append("img", file);
    upload(formdata).then((res) => {
      console.log(res.data.result, "res");
      let path = res.data.result.path;
      setProfileimgae(path);

      if (res.data.isSuccess === "true") {
        toast.success(res.data.message);
      }
    });
  };
  //Cancel Method
  const handleCancel = () => {
    navigate("/commonlayout/landingpage");
  };

  return (
    <div className="container">
      <div>
        <h2 className="Companyheader text-center my-4">
          {" "}
          Edit Your Company Profile
        </h2>
      </div>
      <div className="formcontainer  my-3">
        <form className="form ml-5" onSubmit={formik.handleSubmit}>
          <Row className="my-2">
            <Col>
              <div class="form-group">
                <label for="companyname" className="label my-2 company-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname"
                  name="companyname"
                  placeholder="Enter Company Name"
                  {...formik.getFieldProps("companyname")}
                />
              </div>
              {formik.touched.companyname && formik.errors.companyname ? (
                <p style={{ color: "red" }}>{formik.errors.companyname}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <div class="form-group">
                <label
                  for="companywebsite"
                  className="label my-2 company-label"
                >
                  Company website
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="companywebsite"
                  placeholder="Enter Company Email"
                  {...formik.getFieldProps("companywebsite")}
                />
              </div>
              {formik.touched.companywebsite && formik.errors.companywebsite ? (
                <p style={{ color: "red" }}>{formik.errors.companywebsite}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <div class="form-group">
                <label for="useremail" className="label my-2 company-label">
                  User Mail
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="useremail"
                  placeholder="Enter User Email"
                  {...formik.getFieldProps("useremail")}
                />
              </div>
              {formik.touched.useremail && formik.errors.useremail ? (
                <p style={{ color: "red" }}>{formik.errors.useremail}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <div class="form-group">
                <label
                  for="companylocation"
                  className="label my-2 company-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="companylocation"
                  placeholder="Enter Company Location"
                  {...formik.getFieldProps("companylocation")}
                />
              </div>
              {formik.touched.companylocation &&
              formik.errors.companylocation ? (
                <p style={{ color: "red" }}>{formik.errors.companylocation}</p>
              ) : null}
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <div class="form-group">
                <label for="corvepic" className="label my-2 company-label">
                  Cover Pic
                </label>
                <input
                  type="file"
                  className="form-control "
                  id="corvepic"
                  name="img"
                  onChange={(e) => {
                    handleUpload(e);
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className=" mx-2 my-1 justify-content-center">
            <Col lg={4} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-info w-100  my-2"
                type="submit"
              >
                Update
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

export default EditCompany;
