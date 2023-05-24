import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) =>{

    //estado mediante hooks
    // useState
    // para declarar que un componente tiene estado, se indica de la siguiente manera
    //const [variable, funcionactualizadora] = useState("funcion que indicara el estado inicial ")

    return(
        <section className="orgSection">
            <h3 className= "title">Mi Organizacion</h3>
            <img src="/img/add.png" alt="icono add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg;