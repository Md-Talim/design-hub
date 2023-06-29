import './globals.css';

export const metadata = {
  title: 'DesignHub',
  description: 'A Platform for sharing design work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
