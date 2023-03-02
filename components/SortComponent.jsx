

const SortComponent = () => {
 
  return (
    <div className=" mt-4 flex w-full px-[1rem] md:px-[4rem] lg:px-0 lg:w-[90%] mx-auto">
     <div className="flex-1 flex gap-4">
      <select className="hidden md:inline rounded-xl font-semibold text-xs">
          <option value="HeadphonesType">Headphone Type</option>
      </select>
      <select className="rounded-xl font-semibold text-xs">
          <option value="Price">Price</option>
      </select>
      <select className="rounded-xl font-semibold text-xs">
          <option value="Review">Review</option>
      </select>
      <select className="hidden md:inline rounded-xl font-semibold text-xs">
          <option value="Color">Color</option>
      </select>
      <select className="hidden md:inline rounded-xl font-semibold text-xs">
          <option value="Material">Material</option>
      </select>
      <select className="hidden md:inline rounded-xl font-semibold text-xs">
          <option value="Offer">Offer</option>
      </select>
      <select className="hidden md:inline rounded-xl font-semibold text-xs">
          <option value="All Filter">All Filter</option>
      </select>
        
         
        </div>
      
      <div>
      <select className=" rounded-xl font-semibold text-xs ">
          <option value="Sort by">Sort by</option>
      </select>
      </div>
    </div>
  )
}

export default SortComponent
