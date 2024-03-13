import { TaskItem } from "./TaskItem"

export const TaskList = () => {
   return (
      <>
         <section className='flex flex-col gap-5 mt-6 mb-10'>
            <TaskItem/>
            <TaskItem/>
         </section>
      </>
   )
}
