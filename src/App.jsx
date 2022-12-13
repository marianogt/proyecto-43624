
import React,{BrowserRouter, Route, Routes} from "react";
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
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Promocion />
        <Footer />
      </BrowserRouter>
  )
}

export default App;