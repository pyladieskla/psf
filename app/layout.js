import { Work_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "PyLadies Kampala Refugee Python Skills Workshop",
  description:
    "A hands-on Python workshop bringing practical programming skills and new opportunities to refugees in Arua, Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-dark bg-white">
        {children}
      </body>
    </html>
  );
}
