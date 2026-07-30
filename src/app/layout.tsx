import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: {
        default: "DocuFence",
        template: "%s | DocuFence",
    },
    description:
        "DocuFence is the secure document workspace. Edit, sign, and share your documents in one place.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
        <body className="min-h-full bg-paper font-sans text-ink antialiased overflow-x-hidden">
        {/* Google Tag Manager Container Script */}
        <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-52TT6DSC');
            `,
            }}
        />

        <SiteHeader />
        {children}
        <SiteFooter />
        </body>
        </html>
    );
}