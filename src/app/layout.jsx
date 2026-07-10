import "./globals.css";

export const metadata = {
  title: "Soumya Ranjan Parida | Portfolio",
  description:
    "Portfolio of Soumya Ranjan Parida showcasing projects, skills, and contact details.",
  icons: {
    icon: "/images/s1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css?family=League+Spartan:400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
