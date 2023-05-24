import "./CampoTexto.css"
import { useState } from "react"

const CampoTexto = (props) => {

    const [valor, setValor] = useState("");
    const manejarCambio = (event) =>{
        props.setValor(event.target.value)
    }

    const placeholderModificador = `${props.placeholder}...`
    return(
        <div className="campo-texto">
            <label>{ props.titulo }</label>
            <input 
            placeholder= {placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
             />
        </div>
    )
}



export default CampoTexto;