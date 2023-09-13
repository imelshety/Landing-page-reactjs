import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Serviecs from "./components/Serviecs"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Serviecs />
      <About />
      <Product />
      <Testimonial />
    </>
  )
}

export default App