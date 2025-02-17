import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ handleClick }) => {
  const navigate = useNavigate();
  return (
    <button
      className="horror-button"
      onClick={() => {
        handleClick();
        navigate("/horror");
      }}
    >
      Ready?
    </button>
  );
};

export default Button;
