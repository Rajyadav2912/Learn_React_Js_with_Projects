import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { isoutline, icon, text, ...rest } = props;
  return (
    <button
      {...rest}
      className={isoutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
