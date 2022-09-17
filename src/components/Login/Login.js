import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import googleIcon from "../../assests/Login-page-images/google-icon.png";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/useUser";
import { useGlobalUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AnimatedPage from "../AnimatedPage";
const Login = () => {

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const { loading, signUp, logIn, logInWithGoogle } = useGlobalUser();
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    console.count("component re renders");
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    reset: reset2,
  } = useForm();

  const onSignInSubmit = (values) => {
    const { signInEmail, signInPassword } = values;
    logIn(signInEmail, signInPassword);
  };

  const onSignUpSubmit = (values) => {
    var { signUpEmail, signUpPassword, signUpUsername } = values;

    signUp(signUpEmail, signUpPassword, signUpUsername, reset2);

    navigate("/");
  };

  const handleGoogleLogin = async () => {
    try {
      await logInWithGoogle();
    } catch (err) {
      toast.error("login failed");
    }
  };

  return (
    <>
      <AnimatedPage>
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
                    <p className="error-message">
                      {errors.signInEmail.message}
                    </p>
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
                    <p className="error-message">
                      {errors.signInPassword.message}
                    </p>
                  )}

                  <button
                    className="btn"
                    type="submit"
                    disabled={loading || currentUser}
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                  <p className="signup">
                    don't have an account?{" "}
                    <a href="#" onClick={() => setIsActive(!isActive)}>
                      Sign up.
                    </a>
                  </p>
                </form>
              </div>
              <div className="imgBx">
                <div className="gradient">
                  <h1 className="title">Now or Never.</h1>
                  <p className="subtitle">
                    " Choose a job you love, and you will never have to work a
                    day in your life ".
                  </p>
                  <span className="author">- Helen Keller</span>
                </div>
              </div>
            </div>

            <div className="user signupBx">
              <div className="imgBx">
                <img
                  src="https://images.unsplash.com/photo-1600058644231-c99658f408ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                  alt="image"
                />
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
                    <p className="error-message">
                      {errors2.signUpEmail.message}
                    </p>
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

                  <button
                    className="btn"
                    type="submit"
                    disabled={loading || currentUser}
                  >
                    {loading ? "Loading..." : "SignUp"}
                  </button>
                  <div className="span-container">
                    <span></span>
                    <p className="ruler-center">Or sign up with</p>
                    <span></span>
                  </div>
                  <div
                    className="google-icon-container"
                    onClick={handleGoogleLogin}
                  >
                    <img
                      src={googleIcon}
                      className="google-icon"
                      alt="icon"
                    ></img>
                  </div>
                  <p className="signup">
                    Already have an account?
                    <a href="#" onClick={() => setIsActive(!isActive)}>
                      Sign In.
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
};

export default Login;
