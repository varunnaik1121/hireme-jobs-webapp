import React, { useState } from "react";
import "./Login.css";
import googleIcon from "../../assests/Login-page-images/google-icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const onSignInSubmit = (values) => {
    const { signInEmail } = values;

    // console.log(signInEmail);
    console.log("there were no errors");
  };

  const onSignUpSubmit = (values) => {
    const { signUpEmail } = values;

    // console.log(signInEmail);
    console.log("there were no errors");
  };

  console.log(errors2);

  const navigate = useNavigate();

  return (
    <section>
      <div className={`container ${isActive && "active"}`}>
        <div className="user signinBx">
          <div className="formBx">
            <form onSubmit={handleSubmit(onSignInSubmit)}>
              <h1>
                Welcome to <span className="special">Hire Me</span>
              </h1>
              <p className="subtitle">
                Find your dream jobs through hire me. Lets get started.
              </p>

              <div className={`inputBox `}>
                <input
                  type="email"
                  {...register("signInEmail", {
                    required: "email required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                ></input>
                <span>E-mail</span>
              </div>
              {errors.signInEmail && (
                <p className="error-message">{errors.signInEmail.message}</p>
              )}

              <div className={`inputBox `}>
                <input
                  type="password"
                  {...register("signInPassword", {
                    required: "password required",
                    minLength: {
                      value: 6,
                      message: "password is too short",
                    },
                  })}
                />
                <span>Password</span>
              </div>
              {errors.signInPassword && (
                <p className="error-message">{errors.signInPassword.message}</p>
              )}

              <input type="submit" value="Login" />
              <p className="signup">
                don't have an account?{" "}
                <a href="#" onClick={() => setIsActive(!isActive)}>
                  {" "}
                  Sign up.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            {/* <img
              src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image"
            ></img> */}
            <div className="gradient">
              <h1 className="title">Now or Never.</h1>
              <p className="subtitle">
                " Choose a job you love, and you will never have to work a day
                in your life ".
              </p>
              <span className="author">- Helen Keller</span>
            </div>
          </div>
        </div>
        0 {/* next page starts here */}
        <div className="user signupBx">
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1600058644231-c99658f408ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
              alt="image"
            ></img>
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit2(onSignUpSubmit)}>
              <h2>
                Create an <span className="special">Account</span>
              </h2>
              <div className="inputBox">
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  {...register2("signUpEmail", {
                    required: "email required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                ></input>
                <span>E-mail</span>
              </div>
              {errors2.signUpEmail && (
                <p className="error-message">{errors2.signUpEmail.message}</p>
              )}

              <div className="inputBox">
                <input
                  type="text"
                  placeholder="example123"
                  {...register2("signUpUsername", {
                    required: "Username required",
                    minLength: {
                      value: 4,
                      message: "username is too short",
                    },
                  })}
                ></input>
                <span>Username</span>
              </div>
              {errors2.signUpUsername && (
                <p className="error-message">
                  {errors2.signUpUsername.message}
                </p>
              )}

              <div className="inputBox">
                <input
                  type="password"
                  placeholder="6+ strong character"
                  {...register2("signUpPassword", {
                    required: "password required",
                    minLength: {
                      value: 6,
                      message: "password is too short",
                    },
                  })}
                />
                <span>Password</span>
              </div>
              {errors2.signUpPassword && (
                <p className="error-message">
                  {errors2.signUpPassword.message}
                </p>
              )}

              <input type="submit" value="Create an account" />
              <div className="span-container">
                <span></span>
                <p className="ruler-center">Or sign up with</p>
                <span></span>
              </div>
              <div className="google-icon-container">
                <img src={googleIcon} className="google-icon"></img>
              </div>
              <p className="signup">
                Already have an account?{" "}
                <a href="#" onClick={() => setIsActive(!isActive)}>
                  {" "}
                  Sign In.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
