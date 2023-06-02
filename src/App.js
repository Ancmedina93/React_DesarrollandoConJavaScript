import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const[mostrarFormularios, actualizarMostrar] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormularios);
  }

  const [equipos, setEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9"
      },{
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },{
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },{
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },{
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },{
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },{
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
  ])

  //Registro de colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("nuevoColaborador", colaborador)
    //spread operator  una copia de los datos iniciales y agregar luego un nuevo dato
    setColaboradores([...colaboradores, colaborador]);
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)

  }

  //Actualizar color de Equiopos
  const actualizarColor= (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(equiposActualizados)
  }

  //Actualizar Equipos
  const crearEquipos = (nuevoEquipo) =>{
    setEquipos([...equipos, {...nuevoEquipo, id:uuid()}])

  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(colaboradoresActualizados)
  }

  //ternario si la condicion es verdadera se muestra lo que se coloca en el ternario de lo contario no se muestra
  //{mostrarFormularios === true ? <Formulario /> : <div />} ejemplo tambien se puede escribir como {mostrarFormularios && <Formulario /> } 

  return (
    <div>
      <Header />
      {mostrarFormularios === true ? <Formulario 
      equipos = {equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} 
      crearEquipos={crearEquipos}
      /> : <div />} 
      <MiOrg cambiarMostrar = {cambiarMostrar}/> 
      
      {equipos.map( (equipo) => <Equipo 
      datos={equipo}
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)}

      <Footer />

    </div>
  );
}

export default App;
