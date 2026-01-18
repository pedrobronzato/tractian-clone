import './globals.css';
import { NextIntlClientProvider } from 'next-intl';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://tractian.com/favicon.ico"
        />
      </head>
      <NextIntlClientProvider>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
