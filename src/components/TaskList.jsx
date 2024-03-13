import { TaskItem } from "./TaskItem"

export const TaskList = () => {
   return (
      <>
         <main className='p-4 flex flex-col gap-10'>
				<section className="flex flex-col gap-5">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Lista de tareas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>
               <TaskItem/>
            </section>


				<section className="flex flex-col gap-5">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Terminadas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>
               <TaskItem/>
            </section>
			</main>
      </>
   )
}

// **. / App.jsx**
// ```jsx
// const Card = () =>{
// 	const productos = [
// 		{
// 			"title": 'Samsung',
// 			"price": '14500',
// 			"condition": 'new',
// 			"free_shipping": true,
// 			"thumbnail": 'https://url/img.jpg'
// 		},
// 		// ...
// 	]

// return(
// 	<div className='container-cards'>
// 		{productos.map(product =>
// 			<Card price={product.price} 
// 				shipping={product.free_shipping} 
// 				title={product.title} 
// 				condition={product.condition} 
// 				img={product.thumbnail}
// 			/>
// 		)}
// 	</div>
// )}
// ```

// **. / Component.jsx**
// ```jsx
// const Card = ({title,condition,img,shipping,price}) =>{

// return(
// 	<div>
// 		<img src={img} alt=''/>
// 		<div>
// 			<h4>{title}</h4>
// 			<p>Condición: {condition}</p>
// 			<p>Precio: ${price}</p>

// 			{ shipping && 
// 				<p> ¡Envio gratis! </p> 
// 				<!-- Si su condición es True, se muestra -->
// 			}
// 		</div>
// 	</div>
// )}