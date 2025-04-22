// app/layout.js or app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import withDynamicThemeContext from "@/hoc/theme";
import { config } from "@/constants";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  font-[family-name:var(--font-geist-sans)] `}>
        <div className="bg-white dark:bg-black">{children}</div>
      </body>
    </html>
  );
}

export default withDynamicThemeContext(RootLayout);
