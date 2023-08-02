import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { authservice } from './service/AuthService';


axios.interceptors.request.use(
  config=>{
    const token=authservice.getAuthToken()
    if(token){
      config.headers['x-access-token']= token
    }
    return config
  },(err)=>{
    console.log(err)
    return Promise.reject(err);
  }
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

