import PropTypes from "prop-types";

export const TaskItem = ({text, todosTask, setTodosTask, task}) => {

   const deleteTask =()=>{
      setTodosTask(todosTask.filter(item => item.id !== task.id));
   }

   const checkItem =()=>{
      setTodosTask(todosTask.map((item) =>{
         if(item.id === task.id){
            return {
               ...item,
               checked: !item.checked,
            };
         }
         return item;
      }));
   }

   return (
      <>
         <div className={`flex items-center ${task.checked ? "gap-4" : "gap-4"}`}>
            <label className={`relative flex flex-1 px-6 py-5 rounded-lg outline outline-1 gap-5 ${task.checked ? "bg-gradient-to-b from-neutral-800 outline-neutral-700" : "bg-neutral-700 outline-neutral-600"}`}>
               <div className={`flex flex-col gap-1 ml-4 pl-5 ${task.checked ? "text-neutral-500 line-through" : ""}`}>
                  <p className="text-base poppins-regular">{text}</p>
               </div>
               <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
               <span className="checkmark cursor-pointer absolute top-[21px] left-6 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
            </label>
            <div className={`flex flex-col items-center ${task.checked ? "justify-center text-neutral-500" : "relative text-neutral-400"}`}>
               {task.checked ?
                  <>
                     <span className="h-3 w-3 bg-violet-400 rounded-sm my-2"></span>
                     <i className="bi bi-trash3 cursor-pointer text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out" onClick={deleteTask}></i>
                  </>
               :
                  <i className="bi bi-trash3 cursor-pointer text-lg hover:text-red-400 transition-colors duration-200 ease-out" onClick={deleteTask}></i>
               }

            </div>
         </div>
      </>
   )
}


TaskItem.propTypes = {
   text: PropTypes.string,
   todosTask: PropTypes.array,
   setTodosTask: PropTypes.func,
   task: PropTypes.func
}