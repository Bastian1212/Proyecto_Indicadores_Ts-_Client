import { useState } from 'react'
import TopBar from './components/TopBar/TopBar';
import Indicadores from "./pages/Indicadores";
import Metricas from './pages/Metricas';
import Metas from './pages/Metas';
import Peticiones from './pages/Peticiones';
import Datos from './pages/Datos';
import HistorialPeticiones from "./pages/HistorialPeticiones";


import { IndicadoresProvider } from './context/IndicadoresProvider';

import AddIndicador from './components/Indicador/AddIndicador';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <IndicadoresProvider>
          <Router>
            <TopBar />
            <Routes >
              <Route path="/indicadores" element={<Indicadores/>}/>
              <Route path="/metricas" element={<Metricas/>}/>
              <Route path="/metas" element={<Metas/>}/>
              <Route path="/peticiones" element={<Peticiones/>}/> 
              <Route path="/datos" element={<Datos/>}/> 
              <Route path="/historial-peticiones" element={<HistorialPeticiones/>}/>
            </Routes >
        </Router>
      </IndicadoresProvider>
      
  )

}

export default App
