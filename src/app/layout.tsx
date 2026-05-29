import type { Metadata } from "next";
import "../styles/main.scss"; // <-- ADD THIS LINE

export const metadata: Metadata = {
  title: "RainFocus Summit Challenge",
  description: "UI Challenge Submission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}