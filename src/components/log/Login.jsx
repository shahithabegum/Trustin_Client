import React from 'react'
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { authservice } from "../../service/AuthService";
import {toast} from 'react-toastify'
import { login } from "../../service/Auth";
import './login.css'
const Login = () => {
  let navigate = useNavigate()
    const formik =useFormik({
        initialValues:{
          email:'',
          password:''
        },
        // validationSchema:loginValidation,
        onSubmit:(values,{resetForm})=>{
          console.log(values)
          handleSubmit(values)
          resetForm();
    
      }
      })
      const handleSubmit =(values)=>{
        login(values).then(response=>{
          console.log(response.data)
          if(response.data.isSuccess==="true"){
            navigate('/commonlayout/landingpage')
            authservice.setAuthToken(response.data.result.token)
                authservice.setCurrentUser(response.data.result.ExistingUser)
            toast.success(response.data.message)
          }
          else{
            toast.error(response.data.message)
          }
        })
      }
      if(!authservice.isAuthenticated){
        navigate('/login')
      }
      return (
        <div className="logincontainer">
          <h1 className="text-center log-h1 ">Welcome To TrustIn</h1>
          <div className="formcontainer  my-5">
            <form className="form ml-5" onSubmit={formik.handleSubmit}>
                <h1 className="text-center  " style={{color:'white'}}>Log In</h1>
              <Row className='my-2'>
                <Col  >
                  <div class="form-group">
                    <label for="email" className="label my-2">User Name</label>
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
                       <p style={{color:"red"}}>{formik.errors.email}</p>
                      ) : null}
      
                </Col>
              </Row>
              <Row className='my-2'>
                <Col>
                  <div class="form-group">
                    <label for="password" className="label my-2">Password</label>
                    <input 
                      type="password"
                      className="form-control login-input"
                      id="password"
                      placeholder="Enter Password"
                      {...formik.getFieldProps("password")}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                       <p style={{color:"red"}}>{formik.errors.password}</p>
                      ) : null}
                </Col>
              </Row>
              <Row lg={2} md={1} sm={1} className="mb-3 ">
                <Col lg={6} md={12} sm={12} className="d-flex">
                  <Link to="/forgetpassword" className="link "> forget password?</Link>
                </Col>
                <Col lg={6} md={12} sm={12} className="d-flex">
                  <Link to="/" className="link "> If your a new user signup </Link>
                </Col>
              </Row>
              <Row>
              <Col >
                  <button className="btn  btn-primary " >Submit</button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      );
}

export default Login