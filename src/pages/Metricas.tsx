import { useEffect, useState } from "react";
import axios from "axios"
import AddMetrica from '../components/Metricas/AddMetrica';
import TablaMetrica from "../components/Metricas/TablaMetrica";
function Metricas() {
    const [indicadores, setIndicadores] = useState([]);

    return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>Añadir Metrica</h2>
                        <AddMetrica />
                    </div>
                    <div className="flex-large">
                        <h2>Ver Metrica</h2>
                        <TablaMetrica/>
                        
                    </div>
        
                </div>
            </div>
    );
}

export default Metricas