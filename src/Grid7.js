import React from 'react'

export default function Grid7() {
    return(

        <div className='w-[500px] mx-auto'>
                <div className ="grid grid-cols-4 text-center gap-2">
                      <div className="w-[250px] h-[200px] col-span-2  p-3 bg-red-400 grid place-items-center">1</div>
                      <div className="col-span-2  p-3 bg-green-300 grid place-items-center">2</div>
                      <div className="w-[250px] h-[200px] col-span-2 row-span-2 p-3 bg-yellow-300 grid place-items-center">3 </div>
                      <div className=" p-3 bg-green-300">4</div>
                      <div className=" p-3 bg-red-400">5</div>
                      <div className=" p-3 bg-green-300">6</div>
                      <div className=" p-3 bg-yellow-300">7 </div>
                      
                </div>
      
             </div>)
        
}
