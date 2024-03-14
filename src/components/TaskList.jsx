import { TaskItem } from "./TaskItem"

export const TaskList = () => {
   const componenteCheckeado = false;

   return (
      <>
         <main className='p-4 flex flex-col gap-10'>
				<section className="flex flex-col gap-5">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Lista de tareas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>

               {!componenteCheckeado &&
                  <TaskItem condicion={false}/>}

            </section>


				<section className="flex flex-col gap-5">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Terminadas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>

               {componenteCheckeado &&
                  <TaskItem condicion={true}/>}
                  
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

// ### UseEffect
// ```jsx
// import { useEffect } from 'react'

// useEffect(() => {
// 	// codigo a ejecutar...
// }, [])
// ```

// **Ejemplo en . /App.jsx**

// ```jsx
// import { useEffect } from 'react';

// const User = ({ userName }) => {
// 	useEffect(() => {
// 		document.title = `Hello ${userName}`;
// 	}, [userName]);
// 	// ejecuta cada vez que userName cambie.

// 	return <h1>{userName}</h1>;
// }
// ```

// Se va ejecutar al menos una vez y cada vez que se renderice la dependencia que le especifiquemos en las llaves[ ], si no le especificamos este va ejecutar con cada click.