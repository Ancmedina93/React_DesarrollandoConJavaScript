import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Bonton";
import { useState } from "react";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador, crearEquipos} = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosaEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosaEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipos({titulo, colorPrimario: color})
    }

    return( 
    <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo = "Nombre" placeholder = "Ingresar Nombre" required={true} valor={nombre} setValor={setNombre} />
            <Campo titulo = "Puesto" placeholder = "Ingresar Puesto" required valor={puesto} setValor={setPuesto} />
            <Campo titulo = "Foto" placeholder = "Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
            <Campo titulo = "Titulo" placeholder = "Ingresar titulo" required={true} valor={titulo} setValor={setTitulo} />
            <Campo titulo = "Color" placeholder = "ingresar color en hexadecimal" required valor={color} setValor={setColor} 
            type= "color"  />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
    )
}

export default Formulario;