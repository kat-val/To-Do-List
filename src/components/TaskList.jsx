import { TaskItem } from "./TaskItem"

export const TaskList = () => {
   return (
      <>
         <section className='flex flex-col gap-5 my-6'>
            <TaskItem/>
         </section>
      </>
   )
}
