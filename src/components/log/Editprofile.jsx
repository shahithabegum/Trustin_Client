import React, { useState } from 'react'
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { update_user } from "../../service/UserService";
import { authservice } from '../../service/AuthService';
import {upload} from '../../service/CompanyService'
const Editprofile = () => {
    let navigate = useNavigate()
    const user = authservice.getCurrentUser()
    const [profileimgae, setProfileimgae] = useState('')
    const formik =useFormik({
        initialValues:{
            username:user.username,
            phoneno:user.phoneno,
          email:user.email,
        },
        // validationSchema:loginValidation,
        onSubmit:(values,{resetForm})=>{
          console.log(values)
          handleSubmit()
          resetForm();
    
      }
      })
      const handleUpload = (e)=>{
        let file=e.target.files[0]
        let formdata= new FormData()
        formdata.append("img",file)
        upload(formdata).then(res=>{
            console.log(res.data.result,"res")
            let path=res.data.result.path
            setProfileimgae(path)
    
            if(res.data.isSuccess==="true"){
              
                toast.success(res.data.message)
               
            }
        })
        
      }
      console.log()
      const handleSubmit =()=>{
        const data=Object.assign(formik.values,{profileimg:profileimgae})
        update_user(data).then(response=>{
          console.log(response.data)
          if(response.data.isSuccess==="true"){
            navigate('/commonlayout/landingpage')
            toast.success(response.data.message)
          }
          else{
            toast.error(response.data.message)
          }
        })
      }
      const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
  return (
    <div className="">
          <h1 className="text-center  pt-3">Edit Profile</h1>
          <div className="formcontainer  my-3">
            <form className="form ml-5" onSubmit={formik.handleSubmit}>
            <Row className='my-1'>
                <Col  >
                  <div class="form-group">
                    <label for="username" className="label my-1 company-label">User Name</label>
                    <input
                   
                      type="text"
                      className="form-control "
                      id="username"
                      name="usernamei"
                      placeholder="Enter Your Name"
                      {...formik.getFieldProps("username")}
                    />
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                       <p style={{color:"red"}}>{formik.errors.username}</p>
                      ) : null}
      
                </Col>
              </Row>
              <Row className='my-1'>
                <Col  >
                  <div class="form-group">
                    <label for="email" className="label my-1 company-label">Email Id</label>
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
                       <p style={{color:"red"}}>{formik.errors.email}</p>
                      ) : null}
      
                </Col>
              </Row>
              <Row className='my-1'>
                <Col  >
                  <div class="form-group">
                    <label for="phoneno" className="label my-1 company-label">Phone Number</label>
                    <input
                   
                      type="text"
                      className="form-control "
                      id="phoneno"
                      name="phonenoid"
                      placeholder="Enter Mail Id"
                      {...formik.getFieldProps("phoneno")}
                    />
                  </div>
                  {formik.touched.phoneno && formik.errors.phoneno ? (
                       <p style={{color:"red"}}>{formik.errors.phoneno}</p>
                      ) : null}
      
                </Col>
              </Row>
              {/* <Row className='my-1'>
                <Col>
                  <div class="form-group">
                    <label for="password" className="label my-1 company-label">Password</label>
                    <input 
                      type="password"
                      className="form-control "
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
              <Row className='my-1'>
                <Col>
                  <div class="form-group">
                    <label for="confirmpassword" className="label my-1 company-label">Confirm Password</label>
                    <input 
                      type="password"
                      className="form-control "
                      id="confirmpassword"
                      placeholder="Enter confirmpassword"
                      {...formik.getFieldProps("confirmpassword")}
                    />
                  </div>
                  {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                       <p style={{color:"red"}}>{formik.errors.confirmpassword}</p>
                      ) : null}
                </Col>
              </Row> */}
              <Row className='my-2'>
                  <Col>
                    <div class="form-group">
                      <label for="corvepic" className="label my-2 company-label">Cover Pic</label>
                      <input 
                        type="file"
                        className="form-control "
                        id="corvepic" 
                        name='img'
                        onChange={(e)=>{handleUpload(e)}}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className=" mx-2 my-1 justify-content-center" >
                  <Col lg={4} md={6} sm={12} ml={0} >
                  <button className="btn btn-outline-info w-100  my-2" type="submit">Update</button>
                  </Col>
                  <Col lg={4} md={6} sm={12} ml={0} >
                  <button className="btn btn-outline-danger w-100  my-2" type="button" onClick={()=>handleCancel()}>Cancel</button>
                 
                  </Col>
            </Row>
            </form>
          </div>
        </div>
  )
}



export default Editprofile