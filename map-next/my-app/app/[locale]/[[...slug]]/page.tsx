import Image from "next/image";
import styles from "./page.module.scss";
import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import { getMuseums } from "@/lib/museums";
import Map from "@/componets/Map/Map";
import MapLoader from "./loading-out";
import { useTranslation } from "@/i18n";
import { Locale } from "@/types/museumTypes";
import { Title } from "@/componets/Title";

const MapComponent = async ({ locale }: { locale: Locale }) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/componets/Map/Map"), {
        loading: () => <MapLoader />,
        ssr: false,
      }),
    []
  );
  const response = await getMuseums();
  console.log(response);
  return <Map locale={locale} data={response} />;
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { t } = await useTranslation(locale);
  return (
    <main className={styles.main}>
      <Title locale={locale} />
      <Suspense fallback={<MapLoader />}>
        <MapComponent locale={locale} />
      </Suspense>
    </main>
  );
}
