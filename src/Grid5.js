import React from 'react'
import face1 from './images/1.jpg'
import face2 from './images/2.jpg'
import face3 from './images/3.jpg'
import face4 from './images/4.jpg'
import face5 from './images/5.jpg'

export {face1,face2,face3,face4}

export default function Grid5() {
    return(

        <div className='w-[500px] mx-auto'>
                <div className ="grid grid-cols-4 text-center gap-2">
                      <div className="col-span-2 row-span-2 p-3 bg-red-400 grid place-items-center"><img src={face1} alt='face'></img></div>
                      <div class=" p-3 bg-green-300"><img src={face2} alt='face1'></img></div>
                      <div class=" p-3 bg-yellow-300"><img src={face3} alt='face2'></img></div>
                      <div class=" p-3 bg-green-300"><img src={face4} alt='face3'></img></div>
                      <div class=" p-3 bg-green-300"><img src={face5} alt='face4'></img></div>
                    
                     
                     
                      
                </div>
      
             </div>)
        
}
