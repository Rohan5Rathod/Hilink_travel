import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hilink | Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main className='relative overflow-hidden'>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
