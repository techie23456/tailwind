import React from 'react'

export default function Grid3() {
    return(

        <div className='w-[500px] mx-auto'>
                <div className ="grid grid-cols-4 text-center">
                      <div className="col-span-2 row-span-2 p-3 bg-red-400"></div>
                      <div class="border p-3 bg-green-300">2</div>
                      <div class="border p-3 bg-yellow-300">3 </div>
                      <div class="border p-3 bg-green-300">2</div>
                      <div class="border p-3 bg-yellow-300">3 </div>
                     
                      
                </div>
      
             </div>)
        
}
