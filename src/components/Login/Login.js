import React, { useState } from "react";
import "./Login.css";
import googleIcon from "../../assests/Login-page-images/google-icon.png";
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <div className={`container ${isActive && "active"}`}>
        <div className="user signinBx">
          <div className="formBx">
            <form>
              <h1>
                Welcome to <span className="special">Hire Me</span>
              </h1>
              <p className="subtitle">
                Find your dream jobs through hire me. Lets get started.
              </p>

              <div className="inputBox">
                <input type="text" placeholder="example@gmail.com"></input>
                <span>E-mail</span>
              </div>

              <div className="inputBox">
                <input type="password" placeholder="6+ strong character" />
                <span>Password</span>
              </div>

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

        {/* next page starts here */}

        <div className="user signupBx">
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="image"
            ></img>
          </div>
          <div className="formBx">
            <form>
              <h2>
                Create an <span className="special">Account</span>
              </h2>
              <div className="inputBox">
                <input type="text" placeholder="example@gmail.com"></input>
                <span>E-mail</span>
              </div>
              <div className="inputBox">
                <input type="text" placeholder="example123"></input>
                <span>Username</span>
              </div>

              <div className="inputBox">
                <input type="password" placeholder="6+ strong character" />
                <span>Password</span>
              </div>

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
