import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Project from './components/projects/Project'
import Service from './components/service/Service'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Home></Home>
      {/* <Navbar></Navbar> */}
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
