import React from 'react'
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { reset_password } from "../../service/Auth";
import { useNavigate ,useSearchParams} from "react-router-dom";
import {toast} from 'react-toastify'
const Resetpassword = () => {
  let navigate = useNavigate()
  let [searchParams,setSearchParams] = useSearchParams();
  const token=searchParams.get('token')
    const formik = useFormik({
        initialValues: {
          password: "",
          token:token
        },
       
        onSubmit:values=>{
          console.log(values)
          handleSubmit(values)
          
    
      }
      });
      const handleSubmit =(values)=>{
        reset_password(values).then(res=>{
          console.log(res.data)
          if(res.data.isSuccess==="true"){
            navigate('/')
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message)
            console.log("login failed")
          }
        })
      }
    return(
        <div className="logincontainer">
        <h1 className="text-center log-h1 ">Reset Your Password</h1>
        <div className="formcontainer  my-5">
          <form className="form" onSubmit={formik.handleSubmit} >
          <Row className='my-2'>
                <Col>
                  <div class="form-group">
                    <label for="password" className="label my-2">New Password</label>
                    <input 
                      type="password"
                      class="form-control login-input"
                      id="password"
                      placeholder="Enter New Password"
                      {...formik.getFieldProps("password")}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                       <p style={{color:"red"}}>{formik.errors.password}</p>
                      ) : null}
                </Col>
              </Row>
        
            <Row className='mt-5'>
            <Col >
                <button className="btn  btn-primary " >Reset</button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
  )
}

export default Resetpassword