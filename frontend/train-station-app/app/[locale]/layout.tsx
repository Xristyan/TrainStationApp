import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.scss';
import Footer from '@/components/Footer/Footer';
import { Locale } from '@/types/museumTypes';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <>
      <Provider store={store}>
        <html lang={locale}>
          <body className={inter.className}>
            <Header locale={locale} />
            {children}
            <Footer />
          </body>
        </html>
      </Provider>
    </>
  );
}
