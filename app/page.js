import MobileNav from '@/components/MobileNav'
import NavComponent from '@/components/NavComponent'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-slate-600 relative'>
        <NavComponent />
        <MobileNav />
    </div>
  )
}
