import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Nirmalatai Kakade Art's, Commerce & Science College",
  description: 'Excellence in Higher Education, Shevgaon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#212529] bg-[#F8F9FA]">
        {children}
      </body>
    </html>
  );
}
