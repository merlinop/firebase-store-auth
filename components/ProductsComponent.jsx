

const ProductsComponent = () => {
  return (
    <div className='w-full md:w-[90%] h-[400px] mx-auto bg-white grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:px-5 shadow-lg drop-shadow-lg'>
      {/* Left section */}
      <div className='w-full h-full flex flex-col items-center justify-center  text-green-900 flex-nowrap whitespace-nowrap'>
          <h1 className='text-3xl tracking-wide font-extrabold'>Grab Upto 50% Off On</h1>
          <h1 className='text-3xl tracking-wide font-extrabold'>Selected Headphone</h1>
          <button className='border-2 px-5 py-3 rounded-2xl text-white text-sm font-bold bg-green-900 mr-[15rem] hover:text-white/40 hover:bg-green-700 transition-all duration-200 ease-in-out mt-1'>Buy Now</button>
      </div>

      {/* Right section */}
      <div className='flex flex-col items-center justify-center text-green-900 font-bold'>
          Image Section
      </div>
    </div>
  )
}

export default ProductsComponent
