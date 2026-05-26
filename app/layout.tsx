import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRIMMI - The Last Wallet Goblin",
  description:
    "A dark fantasy crypto meme community built for lore, chaos, and goblin energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[#020604] text-[#f3eed8]">{children}</body>
    </html>
  );
}
