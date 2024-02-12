
import React from 'react'



let danger = "https://img.freepik.com/free-vector/caution-label-gray-background_24908-61044.jpg"
let underConstruction = "https://img.freepik.com/free-vector/  realistic-construction-sign-background_23-2148170112.jpg"

export {danger}
export default function MyGrid() {
  return (

  

    
      <div className='w-[500px] mx-auto'>
      <div className ="grid grid-cols-7 text-center">

            <div class="col-span-7 border p-3 bg-red-400">1</div>
        
            <div class="row-span-5 border p-3 bg-green-300">2</div>
          
            <div class="col-span-5 border p-3 bg-yellow-300">3</div>
          
            <div class="row-span-5 border p-3 bg-blue-300">4</div>

            <div class=" border p-3 bg-red-400">5</div>
          
            <div class="border p-3 bg-green-300">6</div>
          
            <div class="border p-3 bg-yellow-300">7</div>
         
            <div class="border p-3 bg-blue-300">8</div>
          
            <div class="border p-3 bg-red-400">9</div>
          
           <div class="col-start-2 col-span-5 border p-3 bg-green-300">10</div>
          
            <div class="col-span-7 border p-3 bg-yellow-300">11 </div>
          
           
            
      </div>
      </div>
   
  )
}
