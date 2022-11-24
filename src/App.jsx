import React from "react";
import Banners from "./componentes/Banners";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Promocion from "./componentes/Promocion";

// import { logDOM } from '@testing-library/react';
// import React, {useState} from 'react';

const App = () => {
  return (
    <div>
      <Header />
      <Banners />
      <Promocion />
      <Footer />
  </div>
    // <div className='conteiner'>
    //   <h1>{adulto}</h1>
    //   <h2>Hola Mundo!</h2>
    //   <h2>
    //     <SuperForm textoForm="Mariano"/>
    //   </h2>
    // </div>
  )
}


// const hookclase5 =() =>{
//   const [state, setState] = useState(false);
//   return( 
//     <div>
//        <h1 onClick={() => {setState(true)}}> "Hola" </h1>
//     </div>
//     )
// } 

// import * as React from 'react';
// import './style.css';

// export default function App() {
//   const [clics, setClics] = React.useState(0);
//   const [fecha, setFecha] = React.useState(new Date());

//   const actualizar = () => {
//     setClics(clics + 1);
//     setFecha(new Date());
//   };
//   return (
//     <div>
//       <h1 onClick={actualizar}>Contador de Clicks!</h1>
//       <p>
//         Clicks:{clics} -
//         {fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear()}
//       </p>
//     </div>
//   );
// }


export default App;