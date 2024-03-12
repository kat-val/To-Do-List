import { useState } from "react";

export const TaskItem = () => {
   const [check,setCheck]= useState(false);
   // const itemUnchecked = document.getElementById("unchecked");

   let title = "Check Box";
   let description = "Ipsum perferendis officiis velit nihil accusantium, tempora et? Ab, dolores officiis. 🔥";
   
   const checkItem = (e)=>{
      e.preventDefault();
      setCheck(!check);
   }

   return (
      <>
         <div id="unchecked" className="flex items-center gap-4">
            <label className='bg-neutral-700 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-600 relative'>
               <div className="flex flex-col gap-1 ml-4 pl-5">
                  <h4 className="text-base poppins-regular">{title}</h4>
                  <p className='text-sm text-neutral-400'>{description}</p>
               </div>
               <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
               <span className="checkmark cursor-pointer absolute top-5 left-5 h-5 w-5 bg-neutral-500 hover:bg-violet-400 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
            </label>
            <i className="bi bi-three-dots-vertical text-xl text-neutral-500 hover:text-violet-400 transition-colors duration-200 ease-out"></i>
         </div>
      </>
   )
}

   {/* {itemChecked &&
      <div id="checked" className="flex items-center gap-4">
         <label className='bg-gradient-to-br from-neutral-800 flex flex-1 px-5 py-4 rounded-lg outline outline-1 outline-neutral-700 relative'>
            <div className="flex flex-col gap-1 ml-4 pl-5 line-through text-neutral-500">
               <h4 className="text-base poppins-regular">{title}</h4>
               <p className='text-sm'>{description}</p>
            </div>
            <input className="hidden" type="checkbox" name="check"/>
            <span className="checkmark cursor-pointer absolute top-5 left-5 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
         </label>
         <div className="flex flex-col items-center gap-3 text-neutral-500">
            <span className="h-3 w-3 bg-violet-400 rounded-sm hover:bg-neutral-500 transition-colors duration-200 ease-out"></span>
            <i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out"></i>
         </div>
      </div>
   } */}