import React, { FC, useState } from "react";
import classes from "@styles/ui/_input.module.scss";
import clsx from "clsx";
type SelectProps = {
  label?: string;
  className?: string;
  options: any;
  onChange: (e) => void;
  value: any;
};

export const Select: FC<SelectProps> = ({
  label,
  className,
  options,
  onChange,
  value,
}) => {
  const selectClassNames = clsx(classes.selectContainer, className);
  return (
    <div className={classes.selectContainer}>
      {label && <label>label</label>}
      <select onChange={onChange} value={value} className={classes.input}>
        {options &&
          options.map((option, i) => {
            return <option key={i}>{option}</option>;
          })}
      </select>
    </div>
  );
};
