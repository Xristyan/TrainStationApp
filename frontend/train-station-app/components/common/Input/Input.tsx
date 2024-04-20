import React, { FC } from "react";
import classes from "@styles/ui/_input.module.scss";
import clsx from "clsx";
type InputProps = {
  label?: string;
  className?: string;
  onChange: (e) => void;
  value: any;
  reqired?: boolean;
  type?: string;
};
// import PopUp from "./PopUp";
export const Input: FC<InputProps> = ({
  label,
  className,
  onChange,
  value,
  reqired,
  type = "text",
}) => {
  const inputClassNames = clsx(classes.input, className);
  return (
    <div className={classes.selectContainer}>
      {label && <label>{label}</label>}
      <input
        autoComplete="auto"
        value={value}
        onChange={onChange}
        className={inputClassNames}
        required={reqired}
        type={type}
      />
      {/* {props.message && <PopUp message={props.message} />} */}
    </div>
  );
};
