function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if(nuevaTareaTexto === ""){
        alert("Por favor, ingrese una tarea");
        return;
}

let nuevaTarea = document.createElement("li");
nuevaTarea.textContent = nuevaTareaTexto + " ";

let eliminarBoton = document.createElement("button");
eliminarBoton.textContent = "Eliminar";
eliminarBoton.onclick = function() { nuevaTarea.remove();}

nuevaTarea.appendChild(eliminarBoton);
document.getElementById("listaTareas").appendChild(nuevaTarea);

document.getElementById("nuevaTarea").value = "";




}