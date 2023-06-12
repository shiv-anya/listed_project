import React, { Fragment } from "react";
import Google from "../../assets/google.svg";
import Apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <Fragment>
      <div className="flex h-screen">
        <div className="w-5/12 bg-black text-white flex justify-center items-center text-7xl">
          <h2 className="font-bold">Board.</h2>
        </div>
        <div className="w-7/12 flex flex-col justify-center items-center bg-login">
          <div>
            <div>
              <h2 className="text-4xl font-bold">Sign In</h2>
              <p className="text-base">Sign in to your account</p>
            </div>
            <div className="flex text-loginBtn my-6">
              <div>
                <button className="bg-white text-xs py-2 pl-10 pr-8 rounded-lg flex">
                  {<img src={Google} alt="google icon" className="mr-2" />}Sign
                  in with Google
                </button>
              </div>
              <div>
                <button className="bg-white text-xs py-2 pl-10 pr-8 rounded-lg ml-6 flex">
                  {<img src={Apple} alt="apple icon" className="mr-2" />} Sign
                  in with Apple
                </button>
              </div>
            </div>
            <form
              onSubmit={submitHandler}
              className="bg-white rounded-2xl h-auto flex flex-col p-8"
            >
              <label htmlFor="email" className="text-base mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="bg-login py-3 pl-4
                rounded-lg mb-5 text-black"
              />
              <label htmlFor="password" className="text-base mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-lg
                bg-login py-3 pl-4 mb-5 text-black"
              />
              <p className="text-link">Forgot Password?</p>
              <button className="text-base bg-black text-white py-2 mt-6 rounded-lg">
                Sign In
              </button>
            </form>
            <p className="text-gray text-center mt-5">
              Don't have an account?{" "}
              <span className="text-link">Register here.</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
