import "./ListaOpciones.css"

const ListaOpciones = () => {

    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    //metodo map -> arreglo.map((equipos, index) => {
    //    return <options></options>
    //})

    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select>
                { equipos.map( (equipo, index) => <option key={index}> {equipo} </option>
                ) }
            </select>          
        </div>
    )
}

export default ListaOpciones;