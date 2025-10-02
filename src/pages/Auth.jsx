import React, { useState } from "react";
import { FaServer } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Auth = () => {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-xl mx-auto p-12 shadow">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 mb-12 mx-auto cursor-pointer"
        >
          <FaServer />
          <span className="text-3xl text-dark font-bold">EliteHosting</span>
        </div>
        <h1 className="text-3xl text-dark font-bold text-center">{isLogin ? "Sign In" : "Sign Up"}</h1>
        {/* name field */}
        {isLogin ? "" : <div className="mb-4">
          <label
            className="block mb-2 text-dark/80 placeholder:text-sm placeholder:text-dark"
            htmlFor=""
          >
            Full Name
          </label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outkine-none"
            placeholder="Enter your name"
            type="text"
          />
        </div>}
        
        <div className="mb-4">
          <label
            className="block mb-2 text-dark/80 placeholder:text-sm placeholder:text-dark"
            htmlFor=""
          >
            Email Address
          </label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outkine-none"
            placeholder="Enter email"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-dark/80 placeholder:text-sm placeholder:text-dark"
            htmlFor=""
          >
            password
          </label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outkine-none"
            placeholder="Enter email"
            type="password"
          />
        </div>
        {/* forget and remember field  */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input className="w-4 h-4 rounded" type="checkbox" />
            <span>Remember Me</span>
          </div>
          <a className="text-primary hover:underline font-semibold" href="#">
            Forget Password
          </a>
        </div>
        {/* Login Button */}
        <button className="w-full bg-primary text-white font-semibold px-6 py-2.5 rounded cursor-pointer">Login</button>
        <p className="text-dark font-semibold text-center mt-2 ">Have no account yet?
          <span onClick={()=>setIsLogin(!isLogin)} className="text-primary font-bold hover:underline cursor-pointer ml-2">{isLogin?"Sign Up":"Login"}</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
