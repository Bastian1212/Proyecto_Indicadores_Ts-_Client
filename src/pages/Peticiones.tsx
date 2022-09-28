import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ListaIndicadores from '../components/Peticiones/ListaIndicadores';
import ListaMetricas from '../components/Peticiones/ListaMetricas';
import ListaMetas from '../components/Peticiones/ListaMetas';
import clienteAxios from '../../config/axios';
import { Link } from "react-router-dom";
function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metricas, setMetricas] = useState([]);
    const [metas, setMetas] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('indicadores/lista');
            setIndicadores(res.data);
        };
        fetchPosts();
    }, );

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('metricas/lista');
            setMetricas(res.data);
        };
        fetchPosts();
    }, );

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('metas/lista');
            setMetas(res.data);
        };
        fetchPosts();
    }, );




    return (
            <div className="container">
            <h1>Peticiones</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Indicadores</h2>
                    <ListaIndicadores indicadores={indicadores} />
                    
                    <h2>Métricas</h2>
                    <ListaMetricas metricas={metricas} indicadores={indicadores}/>
            
                    <h2>Metas</h2>
                    <ListaMetas metas={metas} indicadores={indicadores} />

                    <Link to="/historial-peticiones" className="flex-row historial" style={{color: "green"}}>
                        <button className="historial-button">
                        Historial
                        </button>
                    </Link>
                </div>
        
            </div>
            </div>
    );

}

export default Peticiones