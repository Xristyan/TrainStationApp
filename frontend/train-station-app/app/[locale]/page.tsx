import Image from "next/image";
import styles from "./page.module.scss";
import Authentication from "@/components/Authentication/Authentication";
import { TrainStationContainer } from "@/components/Station/TrainStationContainer";
import { Hero } from "@/components/Hero";
import type { Locale } from "@/types/museumTypes";

export default function Home({ params }) {
  const { locale } = params;
  return (
    <main className={styles.main}>
      <Hero locale={locale} />
      <TrainStationContainer />
    </main>
  );
}
