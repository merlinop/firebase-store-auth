import './globals.css'
import { GeneralProvider } from '@/contexts/generalContext'
import NavComponent from '@/components/NavComponent'
import NavLayer from '@/components/navlayer/NavLayer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-Poppins',
})

export const metadata = {
  title: 'SHOPCART | HOME',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="w-full min-h-screen flex flex-col bg-[#dfe2f5] relative">
        <GeneralProvider>
           {/* Navbar Component Layout */}
        <NavComponent />
           <NavLayer />
        {children}
        </GeneralProvider>
        </body>
    </html>
  )
}
