import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PM Code | WU R3 | Ecosystem flow",
  description: "WU R3 | Ecosystem flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />

        <div className="bg-yellow-400">{children}</div>
      </body>
    </html>
  );
}
