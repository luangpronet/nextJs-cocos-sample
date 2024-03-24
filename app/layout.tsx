import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Cocos Sample",
  description: "Created by nthiendev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <div style={{ width: "100vw", height: "100vh" }}>
          <div
            style={{
              height: "calc(100vw / 2 )",
              width: "100vw",
              position: "relative",
            }}
          > */}
        {/* <canvas id="GameCanvas" tabIndex={99}></canvas> */}
        {/* </div>
        </div> */}
        {/* <script src="src/system.bundle.js" charSet="utf-8"></script>

        <script
          src="src/import-map.json"
          type="systemjs-importmap"
          charSet="utf-8"
        ></script>

        <script src="./index.js"></script> */}
      </body>
    </html>
  );
}
