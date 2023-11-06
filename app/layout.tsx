import Provider from '@/components/Providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ouch!Quiz',
  description: 'AI Powered Quiz Generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
