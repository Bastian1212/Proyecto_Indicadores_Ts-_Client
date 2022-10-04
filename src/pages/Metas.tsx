import React from 'react'
import AddMeta from '../components/Metas/AddMeta';
import TablaMeta from '../components/Metas/TablaMeta';


import { useEffect, useState } from "react";
import axios from "axios";
import clienteAxios from '../../config/axios';

export default function Metas() {

        const [indicadores, setIndicadores] = useState([]);
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
            const res = await clienteAxios.get('metas/lista');
            setMetas(res.data);
        };
        fetchPosts();
        }, );

    return (
        <div className="container">
        <div className="flex-row">
            <div className="flex-large">
            <h2>Añadir Meta</h2>
            <AddMeta indicadores={indicadores} metas={metas}/>
            </div>
            <div className="flex-large">
            <h2>Ver Meta</h2>

            <TablaMeta indicadores={indicadores}/>
            </div>
        </div>
        </div>
    );
}