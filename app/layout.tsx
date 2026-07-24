import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
;


const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



 
  return (
    <html
      lang="en" className={cn("font-mono", jetbrainsMono.variable)}
   
    >
      <body className="min-h-full flex flex-col">
        
        <Toaster position="top-right" richColors/>


     
        
        {children}
        
        
        
        </body>
    </html>
  );
}
