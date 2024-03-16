// import { TaskItem } from "./TaskItem"

import { useState } from "react";

export const TaskList = () => {
   // const componenteCheckeado = false;
   const [toggleClass, setToggleClass]= useState(false);
   const [viewIcons, setViewIcons]= useState(false);
   const [checkElement,setCheckElement]= useState(false);
   
   
   const activateIconsEdit =()=>{
      setViewIcons(!viewIcons);
      setToggleClass(!toggleClass);
   }
   const checkItem = ()=>{
      setCheckElement(!checkElement);
      // condicion(!checkElement);
   }

   let title = "Check Box";
   let description = "Ipsum perferendis officiis velit nihil accusantium, tempora et? 🔥";

   return (
      <>
         <main className='p-4 flex flex-col gap-10'>
				<section className="flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                  <h2 className='text-lg poppins-regular'>Lista de tareas</h2>
                  <span className="border-b border-neutral-700"></span>
               </div>

               {checkElement ?
                  <div className='flex flex-col gap-5'>
                     <div className="flex items-center gap-4">
                        <label className='relative flex flex-1 px-5 py-4 rounded-lg outline outline-1 bg-gradient-to-br from-neutral-800 outline-neutral-700'>
                           <div className="flex flex-col gap-1 ml-4 pl-5 text-neutral-500 line-through">
                              <h4 className="text-base poppins-regular">{title}</h4>
                              <p className='text-sm'>{description}</p>
                           </div>
                           <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
                           <span className="checkmark cursor-pointer absolute top-5 left-5 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
                        </label>
                        <div className="flex flex-col items-center gap-3 text-neutral-500">
                           <span className="h-3 w-3 bg-violet-400 rounded-sm hover:bg-neutral-500 transition-colors duration-200 ease-out"></span>
                           <i className="bi bi-trash3 text-lg text-neutral-500 hover:text-red-400 transition-colors duration-200 ease-out"></i>
                        </div>
                     </div>
                  </div>
                  :
                  <div className='flex flex-col gap-5'>
                     <div className="flex items-center gap-4">
                        <label className='relative flex flex-1 px-5 py-4 rounded-lg outline outline-1 bg-neutral-700  gap-5 outline-neutral-600'>
                           <div className="flex flex-col gap-1 ml-4 pl-5">
                              <h4 className="text-base poppins-regular">{title}</h4>
                              <p className='text-sm text-neutral-400'>{description}</p>
                           </div>
                           <input className="hidden" type="checkbox" name="check" onClick={checkItem}/>
                           <span className="checkmark cursor-pointer absolute top-5 left-5 h-5 w-5 bg-neutral-500 rounded-full transition-all duration-200 ease-linear after:content-[''] after:absolute after:hidden"></span>
                        </label>
                        <div className="flex flex-col items-center gap-3 h-full flex-wrap text-neutral-500 relative">
                           <i className={`${toggleClass ? 'bi-caret-left-fill absolute right-9 top-5 hover:text-violet-400 text-neutral-400':'bi-three-dots-vertical text-neutral-500 hover:text-violet-400'} bi text-lg cursor-pointer  transition-all duration-300 ease-out`} onClick={activateIconsEdit}></i>
                           {viewIcons &&
                              <>
                                 <i className="bi bi-pencil-square hover:text-violet-400 transition-colors duration-200 ease-out text-lg"></i>
                                 <i className="bi bi-trash3 hover:text-red-400 transition-colors duration-200 ease-out text-lg"></i>
                              </> 
                           }
                        </div>
                     </div>
                  </div>
               }

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