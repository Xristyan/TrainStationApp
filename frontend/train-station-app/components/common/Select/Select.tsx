import React, { FC, useState } from "react";
import classes from "@styles/ui/_input.module.scss";
import clsx from "clsx";
type SelectProps = {
  label?: string;
  className?: string;
  options: any;
  onChange: (e) => void;
  value: any;
  reqired?: boolean;
  defaultMessage?: string;
};

export const Select: FC<SelectProps> = ({
  label,
  className,
  options,
  onChange,
  value,
  reqired = false,
  defaultMessage,
}) => {
  const selectClassNames = clsx(classes.selectContainer, className);
  const DefaultOption = (
    <option value="">{defaultMessage && defaultMessage}</option>
  );
  return (
    <div className={selectClassNames}>
      {label && <label>{label}</label>}
      <select
        required={reqired}
        onChange={onChange}
        value={value}
        className={classes.input}
      >
        {defaultMessage && options && DefaultOption}
        {options &&
          options.map((option, i) => {
            return <option key={i}>{option}</option>;
          })}
      </select>
    </div>
  );
};
