// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {UncheckIcon} from './components/Icons'

import { TaskList } from "./components/TaskList"

function App() {

	return (
		<>
			<main className='p-4 flex flex-col'>
				<div className="flex flex-col gap-4">
					<h2 className='text-lg poppins-regular'>Lista de tareas</h2>
					<span className="border-b border-neutral-700"></span>
					<nav className="">
						<ul className="flex gap-5">
							<li><a className="font-medium hover:text-violet-300 transition-colors duration-200 ease-out" href="#">Por hacer</a></li>
							<span className="text-violet-400">/</span>
							<li><a className=" hover:text-violet-300 transition-colors duration-200 ease-out" href="#">Terminadas</a></li>
						</ul>
					</nav>
					<span className="border-b border-neutral-700"></span>
				</div>
				
				<TaskList/>
			</main>
		</>
	)
}
{/* <div className="flex items-center gap-4">
	<label className='bg-gradient-to-br from-neutral-800 flex flex-1 px-5 py-4 rounded-lg outline outline-1 outline-neutral-700 relative'>
		<div className="flex flex-col gap-1 line-through text-neutral-500">
			<h4 className="text-base poppins-regular">Check Box 2</h4>
			<p className='text-sm'>Ipsum perferendis officiis velit nihil accusantium, tempora et? Ab, dolores officiis. 🔥</p>
		</div>
		<input className="hidden" type="checkbox" name="check" checked/>
	</label>
	<div className="flex flex-col items-center gap-3 text-neutral-500">
		<span className="h-3 w-3 bg-violet-400 rounded-sm hover:bg-neutral-500 transition-colors duration-200 ease-out"></span>
		<i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out"></i>
	</div>
</div> */}

{/* <div className='flex flex-col items-center gap-3 text-neutral-500'>
	<i className="bi bi-pencil-square"></i>
	<i className="bi bi-trash3"></i>
</div> */}

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis architecto, ut iusto nisi ipsa alias adipisci quas dicta amet, consequuntur dolore officia molestias impedit repellat eius aliquam. Ipsa, ad cupiditate!
// Ipsum perferendis doloremque sint, dolore odit, praesentium eveniet suscipit sequi minus ipsam nemo. Eius suscipit rem doloribus eveniet doloremque aliquid vero, officiis velit nihil accusantium, tempora et? Ab, dolores officiis.

export default App
