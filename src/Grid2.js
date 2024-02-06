import React from 'react'
import { danger } from './Grid'
import { face1,face2,face3,face4 } from './Grid5'

export default function Grid2() 
{

    // let danger ="https://img.freepik.com/free-vector/danger-advertising-design_24877-50390.jpg?w=900&t=st=1707237122~exp=1707237722~hmac=7a5971fc9aee7fae4f84413cd84b2327ad22218d47fd336d65211f3ad8f28640"
    return(

        <div className='w-[500px] mx-auto'>
                <div className ="grid grid-cols-4 text-center">
                      <div className="col-span-3 row-span-2 p-3 bg-red-400"><img src={danger} danger alt="danger"></img></div>
                      <div class="border p-3 bg-green-300 grid place-items-center"><img src={face1} danger alt="face1"></img></div>
                      <div class="border p-3 bg-yellow-300 grid place-items-center"><img src={face2} danger alt="face1"></img> </div>
                      <div class="border p-3 bg-blue-300"><img src={face3} danger alt="face1"></img></div>
                      <div class="border p-3 bg-red-400"><img src={face4} danger alt="face1"></img></div>
                      <div class="border p-3 bg-green-300"><img src={face1} danger alt="face1"></img></div>
                      <div class="border p-3 bg-yellow-300"><img src={face2} danger alt="face1"></img> </div>
                      <div class="border p-3 bg-blue-300"><img src={face4} danger alt="face1"></img></div>
                      <div class="border p-3 bg-red-400"><img src={face3} danger alt="face1"></img></div>
                      <div class="border p-3 bg-green-300"><img src={face1} danger alt="face1"></img></div>
                      <div class="border p-3 bg-yellow-300"><img src={face2} danger alt="face1"></img> </div>
                      <div class="border p-3 bg-blue-300"><img src={face3} danger alt="face1"></img></div>
                      <div class="border p-3 bg-red-400"><img src={face4} danger alt="face1"></img></div>
                      <div class="border p-3 bg-green-300"><img src={face1} danger alt="face1"></img></div>
                      <div class="border p-3 bg-yellow-300"><img src={face2} danger alt="face1"></img> </div>
                     
                </div>
      
             </div>)
        
}
