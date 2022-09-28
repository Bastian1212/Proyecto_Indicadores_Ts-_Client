import { useEffect, useState } from "react";
import axios from "axios"
import AddMetrica from '../components/Metricas/AddMetrica';
import TablaMetrica from "../components/Metricas/TablaMetrica";

import clienteAxios from "../../config/axios";
function Metricas() {
    const [indicadores, setIndicadores] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('indicadores/lista');
            setIndicadores(res.data);
        };
        fetchPosts();
    }, );


    return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>Añadir Metrica</h2>
                        <AddMetrica indicadores={indicadores} />
                    </div>
                    <div className="flex-large">
                        <h2>Ver Metrica</h2>
                        <TablaMetrica indicadores={indicadores}/>
                        
                    </div>
        
                </div>
            </div>
    );
}

export default Metricas