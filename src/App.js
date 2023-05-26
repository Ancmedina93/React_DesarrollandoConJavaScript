import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const[mostrarFormularios, actualizarMostrar] = useState(true);
  const[colaboradores, setColaboradores] = useState([]);

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormularios);
  }

  //Registro de colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("nuevoColaborador", colaborador)
    //spread operator  una copia de los datos iniciales y agregar luego un nuevo dato
    setColaboradores([...colaboradores, colaborador]);
  }

  //lista de equipos
  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },{
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },{
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },{
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },{
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },{
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },{
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  //ternario si la condicion es verdadera se muestra lo que se coloca en el ternario de lo contario no se muestra
  //{mostrarFormularios === true ? <Formulario /> : <div />} ejemplo tambien se puede escribir como {mostrarFormularios && <Formulario /> } 

  return (
    <div>
      <Header />
      {mostrarFormularios === true ? <Formulario equipos = {equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} /> : <div />} 
      <MiOrg cambiarMostrar = {cambiarMostrar}/> 
      
      {equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}  />)}

      <Footer />

    </div>
  );
}

export default App;
