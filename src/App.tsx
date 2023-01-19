import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderClient from "./routes/HeaderClient";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Produtos from "./routes/Produtos";
import About from "./routes/About";
import Computer from "./routes/Produtos/Computer";
import Eletronic from "./routes/Produtos/Eletronics";
import Books from "./routes/Produtos/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderClient />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="products" element={<Produtos />}>
            <Route path="computer" element={<Computer />} /> 
            <Route path="eletronic" element={<Eletronic />} /> 
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />}/>
          
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
