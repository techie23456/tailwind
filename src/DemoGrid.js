import React from 'react'

function DemoGrid() {
  return (
     <>

       
            <div className ="h-screen bg-blue-300 p-16 lg:grid grid-cols-4 text-center">
                <div class="col-span-4 border p-3 bg-red-400">NavBar</div>
                <div class="col-span-1 row-span-3 border p-3 bg-green-300">SideBar</div>
                <div class="col-span-3 border p-3 bg-yellow-300">Main</div>
                <div class="col-start-2 col-span-1 border p-3 bg-blue-300">Box-1</div>
                <div class="border p-3 bg-red-400">Box-2</div>
                <div class="border p-3 bg-green-300">Box-3</div>
                <div class="col-start-2 col-span-3 border p-3 bg-yellow-300">Footer</div>
               
               
                
          </div>
      
     

     </>
  )
}

export default DemoGrid
