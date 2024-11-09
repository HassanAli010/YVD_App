import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouTube Dream Downloader',
  description: 'A Web Application created using Nextjs that Downloads Youtube Videos Via Api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer />
      </body>
    </html>
  )
}
