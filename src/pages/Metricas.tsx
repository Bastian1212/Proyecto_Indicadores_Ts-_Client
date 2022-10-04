import { useEffect, useState } from "react";
import axios from "axios"
import AddMetrica from '../components/Metricas/AddMetrica';
import TablaMetrica from "../components/Metricas/TablaMetrica";

import clienteAxios from "../../config/axios";

export default function Metricas() {

        const [indicadores, setIndicadores] = useState([]);
        const [metricas, setMetricas] = useState([]);

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

    return (
        <div className="container">
        <div className="flex-row">
            <div className="flex-large">
            <h2>Añadir Metrica</h2>
            <AddMetrica indicadores={indicadores} metricas={metricas}/>
            </div>
            <div className="flex-large">
            <h2>Ver Metrica</h2>

            <TablaMetrica indicadores={indicadores}/>
            </div>
        </div>
        </div>
    );
}