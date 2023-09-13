import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Serviecs from "./components/Serviecs"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Serviecs />
      <About />
      <Product />
    </>
  )
}

export default App