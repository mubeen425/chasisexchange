import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
// image

import logo from "../../images/logo/logo-full.png";
import bg6 from "../../images/background/bg6.jpg";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Register(props) {
  const [heartActive, setHeartActive] = useState(true);

  const [email, setEmail] = useState("");
  let errorsObj = { email: "", password: "", username: "", name: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [fullName, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUp = async (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    const registerdata = {
      email,
      password,
      userName,
      fullName,
    };
    await API.signup(registerdata)
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          JSON.stringify(localStorage.setItem("user", resp.data.data));
          JSON.stringify(localStorage.setItem("token", resp.data.data.token));
          if (resp.data.data.role === "Regular") {
            navigate("/dashboard");

            toast.success(resp.data.message);
          } else if (resp.data.data.role === "Admin") {
            navigate("/dashboard");

            toast.success(resp.data.message);
          }
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err, "error");
      });
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(email, password, navigate));
  };

  return (
    <>
      <div className="page-wraper">
        <div className="browse-job login-style3">
          <div
            className="bg-img-fix overflow-hidden"
            style={{ background: "#fff url(" + bg6 + ")", height: "100vh" }}
          >
            <div className="row gx-0">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 vh-100 bg-white">
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "653px" }}
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{
                      position: "relative",
                      top: "0",
                      left: "0",
                      dir: "ltr",
                    }}
                  >
                    <div className="login-form style-2">
                      <div className="card-body">
                        <div className="logo-header">
                          <Link to="/login" className="logo">
                            <img
                              src={logo}
                              alt=""
                              className="width-230 mCS_img_loaded"
                            />
                          </Link>
                        </div>
                        <nav className="nav nav-tabs border-bottom-0">
                          <div
                            className="tab-content w-100"
                            id="nav-tabContent"
                          >
                            <div className="tab-pane active show fade">
                              {props.errorMessage && (
                                <div className="">{props.errorMessage}</div>
                              )}
                              {props.successMessage && (
                                <div className="">{props.successMessage}</div>
                              )}
                              <form
                                className="dz-form py-2"
                                onSubmit={onSignUp}
                              >
                                <h3 className="form-title">Sign Up</h3>
                                <div className="dz-separator-outer m-b5">
                                  <div className="dz-separator bg-primary style-liner"></div>
                                </div>
                                <p>Enter your personal details below: </p>
                                <div className="form-group mt-3">
                                  <input
                                    className="form-control"
                                    placeholder="FullName"
                                    value={userName}
                                    onChange={(e) =>
                                      setUsername(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  <input
                                    className="form-control"
                                    placeholder="User Name"
                                    value={fullName}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  {/* <input name="dzName" required="" className="form-control" placeholder="Email Address" type="text" /> */}
                                  <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="hello@example.com"
                                  />
                                  {errors.email && (
                                    <div className="text-danger fs-12">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>

                                <div className="form-group mt-3">
                                  {/* <input name="dzName" required="" className="form-control" placeholder="Password" type="password" /> */}
                                  <input
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    className="form-control"
                                    //defaultValue="Password"
                                    placeholder="passowrd"
                                  />
                                  {errors.password && (
                                    <div className="text-danger fs-12">
                                      {errors.password}
                                    </div>
                                  )}
                                </div>
                                {/* <div className="form-group mt-3 mb-3">
																	<input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="password" />
																</div> */}
                                <div className="mb-3 mt-3">
                                  <span className="form-check float-start me-2">
                                    <input
                                      type="checkbox"
                                      className="form-check-input mt-0"
                                      id="check2"
                                      name="example1"
                                    />
                                    <label
                                      className="form-check-label d-unset"
                                      htmlFor="check2"
                                    >
                                      I agree to the
                                    </label>
                                  </span>
                                  <label>
                                    <Link to={"#"}>Terms of Service </Link>&amp;{" "}
                                    <Link to={"#"}>Privacy Policy</Link>
                                  </label>
                                </div>
                                <div className="form-group clearfix text-left">
                                  <NavLink
                                    to="/login"
                                    className="btn btn-primary outline gray"
                                    type="button"
                                  >
                                    Back
                                  </NavLink>
                                  <button
                                    type="submit"
                                    className="btn btn-primary float-end"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="card-footer">
                        <div className=" bottom-footer clearfix m-t10 m-b20 row text-center">
                          <div className="col-lg-12 text-center">
                            <span>
                              {" "}
                              © Copyright by
                              <span
                                className={`heart ${
                                  heartActive ? "" : "heart-blast"
                                }`}
                                onClick={() => setHeartActive(!heartActive)}
                              ></span>
                              <a href="https://www.crw.com/" target="_blank">
                                {" "}
                                CRW{" "}
                              </a>{" "}
                              All rights reserved.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);
