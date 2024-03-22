// import { TaskItem } from "./TaskItem"

import { useState } from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
   const [todosTask, setTodosTask]= useState([]);
   
   const [inputTask, setInputTask]= useState("");
   // const [outputValues,setOutputValues]= useState(false);

   const inputTaskText =(e)=>{
      setInputTask(e.target.value);
   }
   const submitTask =(e)=>{
      e.preventDefault();
      // setOutputValues(true);
      
      setTodosTask([...todosTask, {
         text: inputTask,
         checked: false,
         id: Math.random()*1000
      }]);

      setInputTask("");
   }

   return (
      <>
         <main className='p-4 flex flex-col gap-10'>
				<section className="flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Lista de tareas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>

               <form>
                  <label className="flex gap-2">
                     <input className="flex-1 px-3" type="text" placeholder="Agregar tarea..." value={inputTask} onChange={inputTaskText}/>
                     <button className="py-1 px-3 text-lg bg-neutral-600" type="submit" onClick={submitTask}>+</button>
                  </label>
               </form>

               
               <ul className='flex flex-col gap-5'>
                  {todosTask.map(todoTask =>(
                     <TaskItem setTodosTask={setTodosTask} todosTask={todosTask} todoTask={todoTask} key={todoTask.id} text={todoTask.text} checked={todoTask.checked}/>
                  ))}
               </ul>
               

            </section>
			</main>
      </>
   )
}

{/* <p className='text-sm text-neutral-400'>{description}</p> */}
{/* <p className='text-sm'>{description}</p> */}