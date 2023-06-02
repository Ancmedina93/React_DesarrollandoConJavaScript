import "./Campo.css"
import { useState } from "react"

const Campo = (props) => {

    const [valor, setValor] = useState("");
    const manejarCambio = (event) =>{
        props.setValor(event.target.value)
    }

    const placeholderModificador = `${props.placeholder}...`

    

    const {type = "text"} = props

    return(
        <div className={`campo campo-${type}`}>
            <label>{ props.titulo }</label>
            <input 
            placeholder= {placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
             />
        </div>
    )
}



export default Campo;