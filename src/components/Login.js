import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../state/users";
import { logout } from "../state/users";
import { anotherlogout } from "../state/users";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Radhika",
              age: 23,
              email: "radhika@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(
            logout({
              name: "",
              age: 0,
              email: "",
            })
          );
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          dispatch(anotherlogout()); 
        }}
      >
        Other Logout
      </button>
    </>
  );
}

export default Login;
