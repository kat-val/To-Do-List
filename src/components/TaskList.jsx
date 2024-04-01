import { TaskItem } from "./TaskItem";
import PropTypes from "prop-types";

export const TaskList = ({todosTask, setTodosTask}) => {

   return (
      <>
            <ul className='flex flex-col gap-5'>
               {todosTask.map(task =>(
                  <TaskItem key={task.id}
                  checked={task.checked} text={task.text}
                  todosTask={todosTask} setTodosTask={setTodosTask} task={task}/>
               ))}
            </ul>
      </>
   )
}

TaskList.propTypes = {
   todosTask: PropTypes.array,
   setTodosTask: PropTypes.func,
}

