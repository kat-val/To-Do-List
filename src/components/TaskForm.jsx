import { useState } from "react";

export const TaskForm = () => {
   const [inputTask, setInputTask]= useState("");
   
   const inputTaskText =(e)=>{
      setInputTask(e.target.value);
   }

   console.log(inputTask)

   return (
      <>
         <form>
            <label className="flex gap-2">
               <input className="rounded-md flex-1 px-5 py-2" type="text" placeholder="Agregar tarea..." value={inputTask} onChange={inputTaskText}/>
               <button className="rounded-md px-4 text-xl bg-neutral-600" type="submit">+</button>
            </label>
         </form>
      </>
   )
}
