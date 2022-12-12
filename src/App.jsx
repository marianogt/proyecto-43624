
import React,{Route,Routes} from "react";
// import Banners from "./componentes/Banners";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import NavBar from "./componentes/NavBar";
import Promocion from "./componentes/Promocion";
import Error404 from "./componentes/Error404";


const App = () => {
  return (
<BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:categoria"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Promocion />
      <Footer />
    </BrowserRouter>






  //   <div>
  //     <NavBar />
  //     <ItemListContainer/>     
  //     {/* <Banners />  */}
  //     <Promocion />
  //     <Footer />
  //  </div>
  )
}

export default App;