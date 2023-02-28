import NavComponent from '@/components/NavComponent'
import NavLayer from '@/components/navlayer/NavLayer'
import ProductsComponent from '@/components/ProductsComponent'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full'>
           
           {/* hero */}
        <section>
          <ProductsComponent />
        </section>
    </div>
  )
}
