import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// itesms are passed into components using props 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}