"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import GlobalThemeOverride from "@/theme/theme";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ebuddy",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <GlobalThemeOverride>{children}</GlobalThemeOverride>
        </Provider>
      </body>
    </html>
  );
}
