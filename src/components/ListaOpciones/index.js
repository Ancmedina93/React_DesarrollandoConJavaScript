import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map -> arreglo.map((equipos, index) => {
    //    return <options></options>
    //})

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
    }

    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
                { props.equipos.map( (equipo, index) => <option key={index}> {equipo} </option>) }
            </select>          
        </div>
    )
}

export default ListaOpciones;