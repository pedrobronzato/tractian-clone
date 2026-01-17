import './globals.css';
import { interTight, inter } from './fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable}`}
    >
      <link
        rel="icon"
        href="https://tractian.com/favicon.ico"
      />
      <body>{children}</body>
    </html>
  );
}
