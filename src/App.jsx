import React from "react";
import Banners from "./componentes/Banners";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import Promocion from "./componentes/Promocion";


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>     
      {/* <Banners /> */}
      <Promocion />
      <Footer />
  </div>
  )
}

export default App;