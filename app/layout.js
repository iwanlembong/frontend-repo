'use client';  // This directive tells React this component is a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Adjust the path if necessary to match your project structure
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
