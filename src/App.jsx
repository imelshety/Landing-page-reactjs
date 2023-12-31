import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import Product from "./components/Product"
import Serviecs from "./components/Serviecs"
import Testimonial from "./components/Testimonial"
import MyFooter from "./components/MyFooter"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Serviecs />
      <About />
      <Product />
      <Testimonial />
      <NewsLetter />
      <MyFooter />
    </>
  )
}

export default App