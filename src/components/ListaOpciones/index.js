import "./ListaOpciones.css"

const ListaOpciones = (props) => {

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

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.setEquipo(e.target.value)

    }

    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
                { equipos.map( (equipo, index) => <option key={index}> {equipo} </option>
                ) }
            </select>          
        </div>
    )
}

export default ListaOpciones;