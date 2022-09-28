import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import AddIndicador from '../components/Indicador/AddIndicador';
import TablaIndicadores from '../components/Indicador/TablaIndicadores';
import clienteAxios from '../../config/axios';

function Indicadores() {
    const [metricas, setMetricas] = useState([]);
    const [metas, setMetas] = useState([]);
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
          <div className="flex-row">
            <div className="flex-large">
              <h2>Añadir Indicador</h2>
              <AddIndicador/>
            </div>
            <div className="flex-large">
              <h2>Ver Indicadores</h2>
    
              <TablaIndicadores/>
            </div>
          </div>
        </div>
      );
}

export default Indicadores