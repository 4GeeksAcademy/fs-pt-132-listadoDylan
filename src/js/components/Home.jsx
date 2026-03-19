import React, { useEffect, useState } from "react";

//include images into your bundle

// import Listado from "./Listado";
//create your first component
const Home = () => {
	// colocamos los estados que vamos a usar para usar la lista donde se va guardar y  cuando queremos que se muestre
	const [input, setInput] = useState("");
	const [listWorks, setlistWorks] = useState([]);
	const [list, setList] = useState(false);
	let vacio = "";
	// cuando colocamos una letraa en el input el setInput lo coge y lo guarda en input
	const handEvent = (e) => {
		setInput(e.target.value)
	}
	// cuando queremos evitar que el submit  recarge la pagina usamos el el preventDeafault
	const handleSubmit = (e) => {

		e.preventDefault()
		// diferente a para que si esta vacio no  añadas
		if (input != vacio) {

			console.log("handleSubmit se acaba de ejecutar")
			// spread operator crea una copia de array y de objetos  atraves de una copia de list works mas la suma que le añada  input
			setlistWorks([...listWorks, input])
			// con esto al darle enter desaparece el texto del input 
			setInput("")

		}
	}
	// cada vez que  se meta un string en el array list work me renderiza y me dice si listworks tiene valor entonces set list es true sino false
	useEffect(() => {
		listWorks ? setList(true) : setList(false);


	}, [listWorks]);
	// creamos la funcion que al darle el click realiza el filter que lo guardamos en un nuevo array y lo variamos de estado llamando  setListworks

	const handClick = (indice) => {
		// la funcion recibe en indice el i enviado en el boton oneClick y compara si son iguales elimina y crea una nueva lista render
		let newList = listWorks.filter((el, i) => i !== indice);
		setlistWorks(newList)

	}

	return (
		<div className=" listado ">
			{/* con la funcion onSubmit enviamos la informacion del formulario  */}
			<form onSubmit={handleSubmit} className=" display-flex justify-content-center ">
				<input type="text" className="modificacion" value={input} onChange={handEvent} />
				<input type="submit" hidden />


			</form>
			<ul className="list-unstyled list-group">
				{listWorks.length === 0 ? <li className="modificacion">  "No hay tareas, añadir tareas"</li> : null}
				{/* con list y && podemos condicionar que se inicie el mapeado si list esta en true */}
				{/* colocamos un boton que elimine de la list el valor del map creado le enviamos el valor de indice  */}
				{list && listWorks.map((el, i) => <li key={i} className=" pokemon list-group-item  d-flex align-items-center justify-content-between ">
					<span className="ms-4"> {el} </span>
					<button className="eliminar  btn btn-outline-danger" onClick={() => handClick(i)}>x</button>
				</li>)}
			</ul>
		</div>
	);
};

export default Home;