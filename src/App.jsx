
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import NavBar from "./componentes/NavBar";
import Promocion from "./componentes/Promocion";
import Error404 from "./componentes/Error404";
import Checkout from "./componentes/Checkout";
import Cart from "./componentes/Cart";
import CartContextProvider from "./componentes/context/CartContext";
import ThankYou from "./componentes/ThankYou";

const App = () => {
  return (
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/thankyou/:id"} element={<ThankYou />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Promocion />
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
  )
}

export default App;