
import React,{useState} from 'react'



let danger = "https://img.freepik.com/free-vector/caution-label-gray-background_24908-61044.jpg"
let underConstruction = "https://img.freepik.com/free-vector/  realistic-construction-sign-background_23-2148170112.jpg"

export {danger}
export default function Grid() {

  const [color, setColor] = useState("#000000");

  const customStyle = {
    backgroundColor: color
  };

  return (

   /* https://img.freepik.com/free-photo/beautiful-flowers-bouquet-with-copy-space_23-2149053793.jpg?t=st=1707236085~exp=1707236685~hmac=95d49dc889136b9f28b85c0e9a85ce44487d458c643a99e011856be50d9edf52 */
      // <div className='w-[500px] mx-auto'  style={{
      // position: 'absolute', left: '50%', top: '50%',
      // transform: 'translate(-50%, -50%)'
      //  }}>

    
      <div className='w-[500px] mx-auto'>
          <div className ="grid grid-cols-4 text-center">
                <div class="border p-3 bg-red-400"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-green-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-yellow-300"><img src={danger} alt="flower"></img></div>
                <div class="border p-3 bg-blue-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-red-400"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-green-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-yellow-300"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-blue-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-red-400"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-green-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-yellow-300"><img src={danger} alt="danfer"></img> </div>
                <div class="border p-3 bg-blue-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-red-400"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-green-300"><img src={underConstruction} alt="danfer"></img></div>
                <div class="border p-3 bg-yellow-300"><img src={danger} alt="danfer"></img></div>
                <div class="border p-3 bg-blue-300"><img src={underConstruction} alt="danfer"></img></div>
                
          </div>

       </div>
  )
}
