import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ListaIndicadores from '../components/Peticiones/ListaIndicadores';
import ListaMetricas from '../components/Peticiones/ListaMetricas';
import ListaMetas from '../components/Peticiones/ListaMetas';
import clienteAxios from '../../config/axios';
function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metricas, setMetricas] = useState([]);
    const [metas, setMetas] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('/indicadores/lista');
            setIndicadores(res.data);
        };
        fetchPosts();
    }, );

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('/metricas/lista');
            setMetricas(res.data);
        };
        fetchPosts();
    }, );

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clienteAxios.get('/metas/lista');
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
                <ListaIndicadores/>
                
                <h2>Métricas</h2>
                <ListaMetricas/>
        
                <h2>Metas</h2>
                <ListaMetas/>
                </div>
        
            </div>
            </div>
    );

}

export default Peticiones