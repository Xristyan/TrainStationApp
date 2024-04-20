import React from "react";
import Image from "next/image";
import banner from "../../public/home-hero.png";
import classes from "@styles/hero/_hero.module.scss";
import { Title } from "../Title";
export const Hero = ({ locale }) => {
  return (
    <div className={classes.hero}>
      <Title locale={locale} />
      <Image src={banner} layout="fill" alt="logo" />
    </div>
  );
};
