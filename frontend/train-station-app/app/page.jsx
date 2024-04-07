import Authentication from "../components/Authentication/Authentication.js";
import styles from "./page.module.scss";
import Link
export default function Home() {
  return <main className={styles.main}>
    <Authentication />
  </main>;
}
