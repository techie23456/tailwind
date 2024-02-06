import React from 'react'

export default function Grid6() {
    return(

        <div className='w-[500px] mx-auto'>
                <div className ="grid grid-cols-4 text-center gap-2">
                      <div className="col-span-4 p-3 bg-red-400 ">1</div>
                      <div className="col-span-2 row-span-2 p-3 bg-green-300 grid place-items-center">2</div>
                      <div className=" p-3 bg-yellow-300">3 </div>
                      <div className=" p-3 bg-green-300">4</div>
                      <div className=" p-3 bg-red-400">1</div>
                      <div className=" p-3 bg-green-300">2</div>
                      <div className="col-span-4 p-3 bg-yellow-300">3 </div>
                     
               
                </div>
      
             </div>)
        
}
