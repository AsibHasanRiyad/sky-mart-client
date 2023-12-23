import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { singIn, googleSignIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging In....");
    setError("");
    singIn(data.email, data.password)
      .then((result) => {
        toast.success("Logged In...", { id: toastId });
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        toast.error(error.message, { id: toastId });
      });
  };

  // google sign in
  const handelGoogleSignIn = () => {
    const toastId = toast.loading("Logging In....");
    googleSignIn()
      .then((result) => {
        toast.success("Logged In...", { id: toastId });
        // console.log(result.user.displayName);
        updateProfile(result.user, {
          displayName: result?.user?.name,
          photoURL: result?.user?.photoURL,
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        toast.success(error.message, { id: toastId });
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-slate-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-slate-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 mb-3 border rounded-md border-slate-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
              />
              {errors.password?.type === "required" && (
                <span className=" text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className=" text-red-500">
                  Password Must be at least 8 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className=" text-red-500 ">
                  Password must contain at least 1 numeric character at least 1
                  lowercase letter at least 1 uppercase letter at least 1
                  special character
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-600 transition-all transform duration-300 w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
            <h1 className=" text-red-500 mt-3">{error}</h1>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16   "></div>
          <p className="px-3 text-sm   ">Signup with social accounts</p>
          <div className="flex-1 h-px sm:w-16   "></div>
        </div>
        <div
          onClick={handelGoogleSignIn}
          className="flex justify-center items-center space-x-2 border my-3 p-1 border-slate-300 border-rounded cursor-pointer rounded hover:bg-slate-800 hover:text-white transition-all transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-slate-900">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-red-500 text-red-400"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
