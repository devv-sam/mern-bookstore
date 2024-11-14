import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const onSubmit = (data) => console.log(data);
  const handleGoogleSignIn = () => {};
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Please Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Login
              </button>
            </div>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Don't have an account yet? Please{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </Link>
          </p>
          {/* Google Sign In */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex flex-w gap-1 items-center justify-center bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-700 "
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="mt-5 text-center text-gray-500 text-xs">
            {" "}
            &copy;2025 Book Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
