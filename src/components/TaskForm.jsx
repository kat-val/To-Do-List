import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const TaskForm = ({taskText, setTaskText, todosTask, setTodosTask}) => {
   
   const inputTaskText =(e)=>{
      setTaskText(e.target.value);
   }

   const submitTask =(e)=>{
      e.preventDefault();
      
      setTodosTask([...todosTask, {
         text: taskText,
         checked: false,
         id: uuidv4()
      }]);
      setTaskText("");
   }

   return (
      <>
         <form>
            <label className="flex gap-2">
               <input className="rounded-md flex-1 px-5 py-2" type="text" placeholder="Agregar tarea..." value={taskText} onChange={inputTaskText}/>
               <button className="rounded-md px-4 text-xl bg-neutral-600" type="submit" onClick={submitTask}>+</button>
            </label>
         </form>
      </>
   )
}

TaskForm.propTypes = {
   taskText: PropTypes.string,
   setTaskText: PropTypes.func,
   todosTask: PropTypes.array,
   setTodosTask: PropTypes.func,
}