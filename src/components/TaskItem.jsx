import { useState } from "react";
// import PropTypes from "prop-types";

export const TaskItem = ({text,todoTask,todosTask,setTodosTask}) => {
   const [toggleClass, setToggleClass]= useState(false);
   const [viewIcons, setViewIcons]= useState(false);
   // const [checkElement,setCheckElement]= useState(false);
   
   
   const activateIconsEdit =()=>{
      setViewIcons(!viewIcons);
      setToggleClass(!toggleClass);
   }
   const checkItem = ()=>{
      // setCheckElement(!checkElement);

      setTodosTask(todosTask.map((item) =>{
         if(item.id === todoTask.id){
            return {
               ...item,
               checked: !item.checked,
            };
         }
         console.log(item.checked);
         return item;
      }));
   }

   const deleteTask =()=>{
      setTodosTask(todosTask.filter(item => item.id !== todoTask.id));
      // Iteramos sobre cada elemento, y va eliminar el que cumpla la función (tiene id diferente al especificado).
   }

   return (
      <>
            <div className="flex items-center gap-4">
               <label className='relative flex flex-1 px-6 py-5 rounded-lg outline outline-1 bg-gradient-to-br from-neutral-800 outline-neutral-700'>
                  <div className="flex flex-col gap-1 ml-4 pl-5 text-neutral-500 line-through">
                     <h4 className="text-base poppins-regular">{text}</h4>
                  </div>
                  <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
                  <span className="checkmark cursor-pointer absolute top-[21px] left-6 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
               </label>
               <div className="flex flex-col items-center justify-center text-neutral-500">
                  <span className="h-3 w-3 bg-violet-400 rounded-sm hover:bg-neutral-500 transition-colors duration-200 ease-out my-2"></span>
                  <i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out" onClick={deleteTask}></i>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <label className='relative flex flex-1 px-6 py-5 rounded-lg outline outline-1 bg-neutral-700  gap-5 outline-neutral-600'>
                  <div className="flex flex-col gap-1 ml-4 pl-5">
                     <h4 className="text-base poppins-regular">{text}</h4>
                  </div>
                  <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
                  <span className="checkmark cursor-pointer absolute top-[21px] left-6 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
               </label>
               <div className="flex flex-col items-center gap-2 h-full flex-wrap text-neutral-500 relative">
                  <i className={`${toggleClass ? 'bi-caret-left-fill absolute right-9 top-5 hover:text-violet-400 text-neutral-400':'bi-three-dots-vertical text-neutral-500 hover:text-violet-400'} bi text-lg cursor-pointer  transition-all duration-300 ease-out`} onClick={activateIconsEdit}></i>
                  {viewIcons &&
                     <>
                        <i className="bi bi-pencil-square hover:text-violet-400 transition-colors duration-200 ease-out text-lg"></i>
                        <i className="bi bi-trash3 hover:text-red-400 transition-colors duration-200 ease-out text-lg" onClick={deleteTask}></i>
                     </> 
                  }
               </div>
            </div>
      </>
   )
}


            // <div className="flex items-center gap-4">
            //    <label className={`relative flex flex-1 px-6 py-5 rounded-lg outline outline-1 gap-5 ${todoTask.checked ? "bg-gradient-to-b from-neutral-800 outline-neutral-700" : "bg-neutral-700 outline-neutral-600"}`}>
            //       <div className={`flex flex-col gap-1 ml-4 pl-5 ${todoTask.checked ? "text-neutral-500 line-through" : ""}`}>
            //          <h4 className="text-base poppins-regular">{text}</h4>
            //       </div>
            //       <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
            //       <span className="checkmark cursor-pointer absolute top-[21px] left-6 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
            //    </label>
            //    <div className={`flex flex-col items-center ${todoTask.checked ? "justify-center text-neutral-500" : "gap-2 h-full flex-wrap text-neutral-500 relative"}`}>   
            //       <i className={`${toggleClass ? 'bi-caret-left-fill absolute right-9 top-5 hover:text-violet-400 text-neutral-400':'bi-three-dots-vertical text-neutral-500 hover:text-violet-400'} bi text-lg cursor-pointer  transition-all duration-300 ease-out`} onClick={activateIconsEdit}></i>
            //       {viewIcons &&
            //          <>
            //             <i className="bi bi-pencil-square hover:text-violet-400 transition-colors duration-200 ease-out text-lg"></i>
            //             <i className="bi bi-trash3 hover:text-red-400 transition-colors duration-200 ease-out text-lg" onClick={deleteTask}></i>
            //          </> 
            //       }

            //       {/* <span className="h-3 w-3 bg-violet-400 rounded-sm hover:bg-neutral-500 transition-colors duration-200 ease-out my-2"></span>
            //       <i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out" onClick={deleteTask}></i> */}
            //    </div>
            // </div>