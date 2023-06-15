import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h4>Profile page</h4>
      <p>
        <b>Name</b>: {user.name}{" "}
      </p>
      <p>
        <b>Age</b>: {user.age}
      </p>
      <p>
        <b>Email</b>: {user.email}
      </p>
    </div>
  );
}

export default Profile;
