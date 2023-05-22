import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Bonton";

const Formulario = () => {
    return( 
    <section className="formulario">
        <form>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo = "Nombre" placeholder = "Ingresar Nombre" />
            <CampoTexto titulo = "Puesto" placeholder = "Ingresar Puesto"/>
            <CampoTexto titulo = "Foto" placeholder = "Ingresar enlace de foto"/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
    )
}

export default Formulario;