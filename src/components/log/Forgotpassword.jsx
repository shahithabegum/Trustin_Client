import React from 'react'
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
const Forgotpassword = () => {
    const formik =useFormik({
        initialValues:{
          email:'',
          password:''
        },
        // validationSchema:loginValidation,
        onSubmit:(values)=>{
          console.log(values)
        }
      })
    return(
        <div className="logincontainer">
        <h1 className="text-center log-h1 ">Forget Password</h1>
        <div className="formcontainer container my-5">
          <form className="form" onSubmit={formik.handleSubmit} >
            <Row className='my-2'>
              <Col  >
                <div class="form-group">
                  <label for="email" className="label my-2">User Name</label>
                  <input
                 
                    type="email"
                    class="form-control login-input"
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
        
            <Row className='mt-5'>
            <Col >
                <button className="btn  btn-primary " >Generate Reset Link</button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
  )
}

export default Forgotpassword