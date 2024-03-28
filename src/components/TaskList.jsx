import { TaskItem } from "./TaskItem";

export const TaskList = () => {
   // const [todosTask, setTodosTask]= useState([]);
   
   // const [outputValues,setOutputValues]= useState(false);
   // const submitTask =(e)=>{
   //    e.preventDefault();
   //    // setOutputValues(true);
      
   //    setTodosTask([...todosTask, {
   //       text: inputTask,
   //       checked: false,
   //       id: Math.random()*1000
   //    }]);

   //    setInputTask("");
   // }

   return (
      <>
            <ul className='flex flex-col gap-5'>
               <TaskItem/>
            </ul>

            {/* <ul className='flex flex-col gap-5'>
               {todosTask.map(todoTask =>(
                  <TaskItem setTodosTask={setTodosTask} todosTask={todosTask} todoTask={todoTask} key={todoTask.id} text={todoTask.text} checked={todoTask.checked}/>
               ))}
            </ul> */}
      </>
   )
}

{/* <p className='text-sm text-neutral-400'>{description}</p> */}
{/* <p className='text-sm'>{description}</p> */}