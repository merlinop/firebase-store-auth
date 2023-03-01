import HeroComponent from '@/components/HeroComponent'
import SortComponent from '@/components/SortComponent'



export default function Home() {
  return (
    <div className=" min-h-screen">
           
           {/* hero */}
          <HeroComponent />

          {/* Sorting  */}
          <SortComponent />
        
    </div>
  )
}
