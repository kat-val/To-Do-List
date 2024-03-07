// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {UncheckIcon} from './components/Icons'
import './App.css'

function App() {

	return (
		<>
			<main className='p-5 flex flex-col'>
				<h2 className='text-lg poppins-regular mb-3'>Lista de tareas</h2>
				<span className="border-b border-neutral-700"></span>
				
				<div className='flex flex-col gap-5 my-6'>	
					<div className='flex items-center gap-4'>
						<div className='bg-neutral-700 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-600'>
							<i className="bi bi-circle text-lg text-neutral-400"></i>
							<div className='flex flex-col gap-1'>
								<h4 className='text-base poppins-regular'>Nombre de tarea</h4>
								<p className='text-sm text-neutral-400'>Ab, dolores officiis.</p>
							</div>
						</div>
						<i className="bi bi-three-dots-vertical text-xl text-neutral-500"></i>
						{/* <div className='flex flex-col gap-3 text-neutral-500'>
							<i className="bi bi-pencil-square"></i>
							<i className="bi bi-trash3"></i>
						</div> */}
					</div>

					<div className='flex items-center gap-4'>
						<div className='bg-neutral-700 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-600'>
							<i className="bi bi-circle text-lg text-neutral-400"></i>
							<div className='flex flex-col gap-1'>
								<h4 className='text-base poppins-regular'>Nombre de tarea</h4>
								<p className='text-sm text-neutral-400'>Ipsum perferendis doloremque sint, dolore odit 🔥</p>
							</div>
						</div>
						<i className="bi bi-three-dots-vertical text-xl text-neutral-500"></i>
						{/* <div className='flex flex-col gap-3 text-neutral-500'>
							<i className="bi bi-pencil-square"></i>
							<i className="bi bi-trash3"></i>
						</div> */}
					</div>
					
					<div className='flex items-center gap-4'>
						<div className='bg-gradient-to-br from-neutral-800 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-700'>
							<input id="draft" className="peer/draft" type="checkbox" name="status" />
							<label htmlFor="draft" className="peer-checked/draft:text-neutral-500">Draft</label>
						</div>
						<i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition duration-200 ease-out"></i>
					</div>

					<div className='flex items-center gap-4'>
						<div className='bg-gradient-to-br from-neutral-800 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-700'>
							<i className="bi bi-check-circle-fill text-lg text-violet-400"></i>
							<div className='flex flex-col gap-1 line-through text-neutral-500'>
								<h4 className='text-base poppins-regular'>Nombre de tarea</h4>
								<p className='text-sm'>Lorem ipsum dolor sit amet 🍺</p>
							</div>
						</div>
						<i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition duration-200 ease-out"></i>
					</div>

					<div className='flex items-center gap-4'>
						<div className='bg-gradient-to-br from-neutral-800 flex flex-1 gap-5 px-5 py-4 rounded-lg outline outline-1 outline-neutral-700'>
							<i className="bi bi-check-circle-fill text-lg text-violet-400"></i>
							<div className='flex flex-col gap-1 line-through text-neutral-500'>
								<h4 className='text-base poppins-regular'>Nombre de tarea</h4>
								<p className='text-sm'>Ipsum perferendis doloremque sint, dolore odit 🔥</p>
							</div>
						</div>
						<i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition duration-200 ease-out"></i>
					</div>
				</div>
			</main>
		</>
	)
}

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis architecto, ut iusto nisi ipsa alias adipisci quas dicta amet, consequuntur dolore officia molestias impedit repellat eius aliquam. Ipsa, ad cupiditate!
// Ipsum perferendis doloremque sint, dolore odit, praesentium eveniet suscipit sequi minus ipsam nemo. Eius suscipit rem doloribus eveniet doloremque aliquid vero, officiis velit nihil accusantium, tempora et? Ab, dolores officiis.

export default App
