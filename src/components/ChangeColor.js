import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../state/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
        <h3>TYPE THE COLOR YOU LIKE!</h3>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(change(color));
        }}
      >
        CHANGE
      </button>
    </div>
  );
}

export default ChangeColor;
