import React from 'react'
import AddMeta from '../components/Metas/AddMeta';
import TablaMeta from '../components/Metas/TablaMeta';


import { useEffect, useState } from "react";
import axios from "axios";
import clienteAxios from '../../config/axios';

const Metas = () => {
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
                    <h2>Añadir Meta</h2>
                    <AddMeta indicadores={indicadores}/>
                </div>
                <div className="flex-large">
                    <h2>Ver Meta</h2>
                    <TablaMeta indicadores={indicadores} />
                </div>
            </div>
        </div>
    );
}

export default Metas