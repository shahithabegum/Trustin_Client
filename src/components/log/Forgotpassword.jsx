import React from 'react'
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { forget_Password } from "../../service/Auth";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const Forgotpassword = () => {
  let navigate = useNavigate()
  const formik = useFormik({
      initialValues: {
        email: ""
      },
     
      onSubmit:(values,{resetForm})=>{
        console.log(values)
        handleSubmit(values)
        resetForm();
  
    }
    });
  
    const handleSubmit =(values)=>{
      forget_Password(values).then(res=>{
        console.log(res.data)
        if(res.data.isSuccess==="true"){
          navigate('/resetpassword')
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message)
        }
      })
    }
    return(
        <div className="logincontainer">
        <h1 className="text-center log-h1 ">Forget Password</h1>
        <div className="formcontainer  my-5">
          <form className="form" onSubmit={formik.handleSubmit} >
            <Row className='my-2'>
              <Col  >
                <div class="form-group">
                  <label for="email" className="label my-2">User Name</label>
                  <input
                 
                    type="email"
                    class="form-control login-input"
                    id="email"
                    name="email"
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