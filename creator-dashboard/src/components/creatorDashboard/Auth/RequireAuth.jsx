import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toggleSnackBar } from "../../../redux/features/modalsSlice";

function RequireAuth({ children }) {
    const isAuth = useSelector((state) => state.authToken.isAuth);
  const dispatch = useDispatch()
  if (!isAuth) {
    dispatch(toggleSnackBar({
      message: "Unauhorized! please login to proceed ",
      open: true,
      severity: "error",
    }))
    return <Navigate to="/creator/login" replace />;
  }
  return <>{children}</>;
}

export default RequireAuth;
