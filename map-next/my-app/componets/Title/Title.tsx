"use client";
import { useTranslation } from "@/i18n/client";
import { Locale } from "@/types/museumTypes";
import classes from "@styles/title/_title.module.scss";
import { FC } from "react";
type TitleProps = {
  locale: Locale;
};
export const Title: FC<TitleProps> = ({ locale }) => {
  const { t } = useTranslation(locale, "translations");
  return (
    <div className={classes.container}>
      <h1>{t("heading")}</h1>
      <p>{t("text")}</p>
    </div>
  );
};
