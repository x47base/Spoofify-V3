import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "./fonts/helvetica.woff",
  variable: "--font-helvetica",
  weight: "100 900",
});

export const metadata = {
  title: "Spoofify Music",
  description: "This is an open-source private use music platform, that contains non-copyright-sounds and allows users to upload sounds, that can be approoved and then listened to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
