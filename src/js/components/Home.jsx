import React, { useEffect, useState } from "react";

//include images into your bundle

// import Listado from "./Listado";
//create your first component
const Home = () => {
// colocamos los estados que vamos a usar para usar la lista donde se va guardar y  cuando queremos que se muestre
   const [input ,setInput]=useState("");
   const [listWorks , setlistWorks]=useState([]);
   const [list,setList]=useState(false);
   let vacio= ""
// cuando colocamos una letraa en el input el setInput lo coge y lo guarda en input
const handEvent = (e) =>{
setInput(e.target.value)
}
// cuando queremos evitar que el submit  recarge la pagina usamos el el preventDeafault
const  handleSubmit=(e)=> {

e.preventDefault()
// diferente a para que si esta vacio no  añadas
if(input!=vacio){

	console.log("handleSubmit se acaba de ejecutar")
	// spread operator crea una copia de array y de objetos  atraves de una copia de list works mas la suma que le añada  input
	setlistWorks([...listWorks,input])
	setInput("")
	
}
}
// cada vez que se guarde
useEffect(()=>{
	listWorks? setList(true): setList(false);
	
	
},[listWorks]);







	return (
		<div className="text-center">
            <form onSubmit={handleSubmit}>
            <input type="text"  value={input}  onChange={handEvent}/>
			<input type="submit"   hidden  />

		
			</form>
	  <ul>
		{/* con list y && podemos condicionar que se inicie el mapeado si list esta en true */}
        { list && listWorks.map((el,i)=>  <li key={i}> {el}   </li>)}
	  </ul>
		</div>
	);
};

export default Home;