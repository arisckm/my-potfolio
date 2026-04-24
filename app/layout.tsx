import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Arisha | Developer Portfolio",
  description: "Computer Science Student & Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-brand-bg text-brand-text`}>
        <nav className="max-w-5xl mx-auto p-6 flex justify-between items-center">
          <span className="font-mono font-bold text-lg tracking-tighter italic">
            arisha.dev
          </span>
          <div className="space-x-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="mailto:arishamanzoor31@example.com" className="hover:text-brand-accent transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/arisha-manzoor-14b494311/" target="_blank">LinkedIn</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}