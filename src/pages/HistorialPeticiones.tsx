import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HistorialIndicadores from '../components/HistorialPeticion/HistorialIndicador';
import HistorialMetricas from '../components/HistorialPeticion/HistorialMetas';
import HistorialMetas from '../components/HistorialPeticion/HistorialMetrica';

function HistorialPeticines() {


    // const [indicadores, setIndicadores] = useState([]);
    // const [metricas, setMetricas] = useState([]);
    // const [metas, setMetas] = useState([]);
    // const [historial, setHistorial] = useState([]);

    return (
            <div className="container">
            <h1>Historial de solicitudes</h1>
            <div className="flex-row">
            <div className="flex-large">
                <h2>Indicadores</h2>
                <HistorialIndicadores />
            
                <h2>Métricas</h2>
                <HistorialMetricas />

                <h2>Metas</h2>
                <HistorialMetas />

            </div>

            </div>
        </div>
    );
    
}

export default HistorialPeticines