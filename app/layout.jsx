// app/layout.js or app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import withDynamicThemeContext from "@/hoc/theme";
import config from "@/config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Shiva Singh | Developer",
  description: `Design portfolio of ${config.name} — a product developer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
};

function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className="h-screen w-screen overflow-hidden">
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] h-screen w-screen overflow-y-auto`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}

export default withDynamicThemeContext(RootLayout);
