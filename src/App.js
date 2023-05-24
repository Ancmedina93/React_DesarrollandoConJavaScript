import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/miOrg';

function App() {

  const[mostrarFormularios, actualizarMostrar] = useState(true);

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormularios);
  }

  //ternario si la condicion es verdadera se muestra lo que se coloca en el ternario de lo contario no se muestra
  //{mostrarFormularios === true ? <Formulario /> : <div />} ejemplo

  return (
    <div>
      <Header />
      {mostrarFormularios === true ? <Formulario /> : <div />}
       
      <MiOrg cambiarMostrar = {cambiarMostrar}/>     
    </div>
  );
}

export default App;
