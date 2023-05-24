import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Bonton";
import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")



    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosaEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        console.log(datosaEnviar)
    }

    return( 
    <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo = "Nombre" placeholder = "Ingresar Nombre" required={true} valor={nombre} setValor={setNombre} />
            <CampoTexto titulo = "Puesto" placeholder = "Ingresar Puesto" required valor={puesto} setValor={setPuesto} />
            <CampoTexto titulo = "Foto" placeholder = "Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setEquipo={setEquipo}  />
            <Boton texto="Crear"/>
        </form>
    </section>
    )
}

export default Formulario;