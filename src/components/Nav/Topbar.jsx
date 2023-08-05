import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { authservice } from "../../service/AuthService";
import {
  getNotification,
  read,
  rejectNotify,
} from "../../service/Notification";
import { connect_company } from "../../service/CompanyService";
import { toast } from "react-toastify";

const Topbar = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState([]);
  const [count, setCount] = useState([]);
  const user = authservice.getCurrentUser();

  useEffect(() => {
    get_notification();
    countSet();
  }, []);
  //handle notification taggle method for open and close
  const handleNotification = () => {
    setShow(!show);
  };

  //get notification method
  const get_notification = () => {
    getNotification(user.email).then((res) => {
      if (res.data.isSuccess === "true") {
        setNotification(res.data.result);
        let data = res.data.result;
        console.log(data, "data");
        const result = data.filter((item) => {
          return item.read === "unread";
        });
        setCount(result);
      }
    });
  };
  //handle read notification
  const handleRead = (item) => {
    let id = item._id;
    read(id).then((res) => {
      if (res.data.isSuccess === "true") {
        console.log(res.data);
        get_notification();
        countSet();
      }
    });
  };
  //handle notification count method
  const countSet = () => {
    notification.filter((item) => {
      if (item.read === "unread") {
        setCount(item);
      }
    });
  };
  //Accepting connect request method
  const handleConnect = (item) => {
    let useremail = item.useremail;
    let connecter = item.sender;
    connect_company(connecter, { useremail }).then((res) => {
      if (res.data.isSuccess === "true") {
        toast.success(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };
  //notification reject method
  const handleReject = (item) => {
    let id = item._id;
    rejectNotify(id).then((res) => {
      if (res.data.isSuccess === "true") {
        console.log(res.data);
        get_notification();
        countSet();
      }
    });
  };
  console.log(count, "count");
  console.log(notification);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark  fixed-top"
        style={{ backgroundColor: "#37306B" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/commonlayout/landingpage">
            Trustin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/commonlayout/company">
                  Create Company
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/commonlayout/editcompany">
                  Edit Company
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/commonlayout/connect">
                  Connect
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/commonlayout/adduser">
                  Add User
                </Link>
              </li>
              <li
                className="nav-item mx-2"
                onClick={() => {
                  handleNotification();
                }}
              >
                <div className="nav-link d-flex">
                  <span to="#">Notification</span>
                  {count.length > 0 ? (
                    <div className="counter">{count.length}</div>
                  ) : null}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {show && (
        <div className="notification">
          <ul className="list">
            {notification.map((item, index) => (
              <li
                className="connectionlist py-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleRead(item);
                }}
              >
                {item.type === "1" ? (
                  <div className="d-flex justify-content-around my-2">
                    {item.read === "unread" ? (
                      <b>{item.message}</b>
                    ) : (
                      <p>{item.message}</p>
                    )}
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        handleConnect(item);
                      }}
                    >
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleReject(item);
                      }}
                    >
                      <i class="fa fa-close"></i>
                    </button>
                  </div>
                ) : (
                  <div className="my-2">
                    {item.read === "unread" ? (
                      <b className="text-left my-2 mx-5">{item.message}</b>
                    ) : (
                      <p className="text-left my-2 mx-3">{item.message}</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topbar;
