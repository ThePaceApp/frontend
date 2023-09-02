import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../../redux/features/AuthApi";
import ExclamationIcon from "../../../iconsSVG/Exclamation";
import { Alert, Collapse, CircularProgress } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../redux/features/authTokenSlice";
import { toggleSnackBar } from "../../../../redux/features/modalsSlice";

function Login() {
  const ref = useRef();
  const { signIn } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    ref.current?.focus();
  }, []);
  const navigate = useNavigate();
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  let [login, { isLoading: loading, error }] = useLoginMutation();
  async function onSubmit(data) {
    // console.log(data);
    // navigate("/");
    try {
      const response = await login(data).unwrap();
      console.log(response);
      //   console.log(response?.token)
      //   We can also check from here if the user has verified their email address
      if (response?.token) {
        signIn(response?.token, () => navigate("/creator/over-view"));
        dispatch(
          toggleSnackBar({
            message: "Logged in successfully",
            open: true,
            severity: "success",
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(
        toggleSnackBar({
          message: "An error occured",
          open: true,
          severity: "error",
        })
      );
    }
  }

  return (
    <>
      <form
        className="form-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="div1">
          <div>
            <div className="img-logo">
              <img src="../assets/images/paceAppLogo.png" alt="PaceApp logo" />
            </div>
            <h2>The Pace App</h2>
            <span>Admin Login</span>
          </div>
        </div>
        <div className="div2">
          <div className="sub-div2">
            <h2>Login to Admin Dashboard</h2>
            <Collapse
              in={error?.data?.error?.status === "fail" || error?.status}
              className="collapse"
            >
              <Alert className="alert" severity="error">
                {error?.data?.message ||
                  (error?.error &&
                    `${error?.error}! Kindly check your internet connection.`)}
              </Alert>
            </Collapse>

            <div className="input-label">
              <label for="email">Email</label>
              <div>
                <input
                  type="text"
                  id="email"
                  ref={ref}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <p
                  className={`err-msg ${
                    errors.email?.message && "err-msg-active"
                  }`}
                >
                  {errors.email?.message}
                </p>
              </div>
            </div>

            <div className="input-label">
              <label for="password">Password</label>
              <div>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <p
                  className={`err-msg ${
                    errors.password?.message && "err-msg-active"
                  }`}
                >
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <a href="#">Forget password?</a>
            <br />
            <br />
            <button disabled={loading}>
              {loading ? (
                <CircularProgress color="inherit" size={18} />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
