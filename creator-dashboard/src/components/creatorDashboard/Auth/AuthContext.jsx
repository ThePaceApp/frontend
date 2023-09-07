import { createContext, useContext, useEffect } from "react";
import { useLoginMutation } from "../../../redux/features/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, unsetToken } from "../../../redux/features/authTokenSlice";
import { useGetUserQuery } from "../../../redux/features/UserApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // import uselogout mutation when created
  // const [logout] = useLogoutMutation()
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const isAuth = useSelector((state) => state.authToken.isAuth);
  const token = useSelector((state) => state.authToken.token);
  // Get the user details with this below
  console.log(token)
  console.log(isAuth)
//   const [getUser] = useGetUserQuery()

  function signIn(token, callback) {
    dispatch(setToken(token));
    callback();
  }

//   useEffect(() => {
//       if(isAuth){
//           getUser()
//               .unwrap()
//               .then(data => {
//                   if(data.status === "success"){
//                       dispatch(setToken(token))
//                   }
//                   else{
//                       dispatch(unsetToken())
//                   }
//               })
//               .catch(err => dispatch(unsetToken()))
//       }
//   }, [token])

  async function signOut() {
    try {
    //   let data = await logout().unwrap();  // because we dont have logout mutation yet
      let data = {status: 'failed'}
    if (data.status === "success") {
        // navigate("/", { replace: true });
        dispatch(unsetToken());
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
