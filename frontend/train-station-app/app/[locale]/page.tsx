import styles from './page.module.scss';
import { TrainStationContainer } from '@/components/Station/TrainStationContainer';
import { Hero } from '@/components/Hero';
import type { Locale } from '@/types/museumTypes';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <main className={styles.main}>
      <Hero locale={locale} />
      <TrainStationContainer />
    </main>
  );
}
