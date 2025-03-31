<<<<<<< HEAD

=======
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from '../src/components/Header'
import Footer from "./components/Footer"
import Error from "./routes/Error"
import Login from './routes/Login'
import Home from './routes/Home'
import Filtro from './routes/Filtro'
import Jogador from './routes/Jogador'
>>>>>>> dev

function App() {
  

  return (
<<<<<<< HEAD
    <>
     
    </>
=======
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/filtro" element={<Filtro/>}/>
        <Route path="/jogador" element={<Jogador/>}/>
      </Routes>
      <Aside/>
      <Footer/>
    </Router>
>>>>>>> dev
  )
}

export default App
