import './App.css';
import Dashbo from './components/Dashbo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CebollaRoja from './pages/CebollaRoja';
import PapaAmarilla from './pages/PapaAmarilla';
import ArvejaVerde from './pages/ArvejaVerde';
//import CebollaRP from './pages/pmanana/CebollaRP';
//import PapaM from './pages/pmanana/PapaM';
//import ArvejaVR from './pages/pmanana/ArvejaVR';
import CebollaRC from './pages/comparativa/CebollaRC';
import PapaAC from './pages/comparativa/PapaAC';
import ArvejaVCo from './pages/comparativa/ArvejaVCo';
import Home from './pages/Home';


function App() {
  return (
    <div >

      <Router>
        <Dashbo />
        
        <Routes>
          <Route path='/' exac Component={Home}></Route>
          <Route path='/CebollaRoja' exact Component={CebollaRoja}></Route>
          <Route path='/PapaAmarilla' exact Component={PapaAmarilla}></Route>
          <Route path='/ArvejaVerde' exact Component={ArvejaVerde}></Route>
          {/* PREDICCION PARA MAÑANA
          <Route path='/CebollaRP' exact Component={CebollaRP}></Route>
          <Route path='/PapaM' exact Component={PapaM}></Route>
          <Route path='/ArvejaVR' exact Component={ArvejaVR}></Route>
          {/* COOMPARACIONES*/}
          <Route path='/CebollaRC' exact Component={CebollaRC}></Route>
          <Route path='/PapaAC' exact Component={PapaAC}></Route>
          <Route path='/ArvejaVCo' exact Component={ArvejaVCo}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
