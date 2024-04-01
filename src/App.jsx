import { useState } from "react"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

function App() {
	const [taskText, setTaskText] = useState("");
	const [todosTask, setTodosTask] = useState([]);

	return (
		<>
			<main className='p-4 flex flex-col gap-10 w-svw lg:w-3/5 md:w-4/5 m-auto'>
				<section className="flex flex-col gap-7">
					<div className="flex flex-col gap-4">
						<h2 className='text-lg poppins-regular'>Lista de tareas</h2>
						<span className="border-b border-neutral-700"></span>
					</div>

					<TaskForm taskText={taskText} setTaskText={setTaskText} todosTask={todosTask} setTodosTask={setTodosTask}/>
					<TaskList todosTask={todosTask} setTodosTask={setTodosTask}/>
				</section>
			</main>
		</>
	)
}
export default App
