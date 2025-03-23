import { useState } from "react";

function IncDec() {
    const [count,setCount]=useState(0);
    return (
        <div className='min-h-screen  py-6 px-3 bg-gray-300 flex flex-col items-center justify-center'>
            <div className=" w-[350px] border-0 bg-red-400 rounded-md py-6 px-3 flex flex-col items-center justify-center h-64">
                <h1 className="text-4xl font-semibold text-white">{count}</h1>
              <div className="flex space-x-4 mt-6" > 
                 <button className="bg-gray-200 border-0 py-3 px-3" onClick={()=>setCount(count+1)}>Increment</button>
                <button className="bg-gray-200 border-0 py-3 px-3" onClick={()=>setCount(count-1)}>Decrement</button>
                </div>
            </div>
        </div>



    )
}

export default IncDec;