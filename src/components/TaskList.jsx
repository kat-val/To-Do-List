// import { TaskItem } from "./TaskItem"

import { useState } from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
   const [todosTask, setTodosTask]= useState([]);
   
   const [inputTask, setInputTask]= useState("");
   // const [outputValues,setOutputValues]= useState(false);

   const inputTaskText =(e)=>{
      setInputTask(e.target.value);
   }
   const submitTask =(e)=>{
      e.preventDefault();
      // setOutputValues(true);
      
      setTodosTask([...todosTask, {
         text: inputTask,
         checked: false,
         id: Math.random()*1000
      }]);

      setInputTask("");
   }

   // let title = "Terminar proyecto To-Do-List";
   // let description = "¿Se podrá terminar con esta tortura? El bagre no se rinde 🔥";
   // let description = "Ipsum perferendis officiis velit nihil accusantium, tempora et? 🔥";

   return (
      <>
         <main className='p-4 flex flex-col gap-10'>
				<section className="flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Lista de tareas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>

               <form>
                  <label className="flex gap-2">
                     <input className="flex-1 px-3" type="text" placeholder="Agregar tarea..." value={inputTask} onChange={inputTaskText}/>
                     <button className="py-1 px-3 text-lg bg-neutral-600" type="submit" onClick={submitTask}>+</button>
                  </label>
               </form>

               
               <ul className='flex flex-col gap-5'>
                  {todosTask.map(todoTask =>(
                     <TaskItem setTodosTask={setTodosTask} todosTask={todosTask} todoTask={todoTask} key={todoTask.id} text={todoTask.text} checked={todoTask.checked}/>
                  ))}
               </ul>
               {/* {outputValues && } */}
               

            </section>
			</main>
      </>
   )
}

{/* <p className='text-sm text-neutral-400'>{description}</p> */}
{/* <p className='text-sm'>{description}</p> */}

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