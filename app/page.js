import HeroComponent from '@/components/HeroComponent'
import SortComponent from '@/components/SortComponent'
import MidText from '@/components/MidText'
import ProductsComponent from '@/components/ProductsComponent'
import SimilarProductComponent from '@/components/SimilarProductComponent'
import CartModal from '@/components/modal/CartModal'



export default function Home() {
  return (
    <div className=" min-h-screen relative overflow-x-hidden">
           
           {/* hero */}
          <HeroComponent />

          {/* Sorting  */}
          <SortComponent />

          {/* MidText */}
          <MidText />

          {/* Products listing */}
          <ProductsComponent />

          {/* Similar items */}
          <SimilarProductComponent />

          {/* Cart Modal */}
          <CartModal />


    </div>
  )
}
