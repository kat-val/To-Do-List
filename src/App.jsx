import { TaskList } from "./components/TaskList"

function App() {

	return (
		<>
			<main className='p-4 flex flex-col'>
				<div className="flex flex-col gap-4">
					<h2 className='text-lg poppins-regular'>Lista de tareas</h2>
					<span className="border-b border-neutral-700"></span>
				</div>
				
				<TaskList/>

				<div className="flex flex-col gap-4">
					<h2 className='text-lg poppins-regular'>Terminadas</h2>
					<span className="border-b border-neutral-700"></span>
				</div>
			</main>
		</>
	)
}
export default App

{/* <nav className="">
	<ul className="flex gap-5">
		<li><a className="font-medium hover:text-violet-300 transition-colors duration-200 ease-out" href="#">Por hacer</a></li>
		<span className="text-violet-400">/</span>
		<li><a className=" hover:text-violet-300 transition-colors duration-200 ease-out" href="#">Terminadas</a></li>
	</ul>
</nav> */}