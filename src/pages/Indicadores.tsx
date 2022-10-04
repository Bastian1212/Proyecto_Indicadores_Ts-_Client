import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import AddIndicador from '../components/Indicador/AddIndicador';
import TablaIndicadores from '../components/Indicador/TablaIndicadores';
import clienteAxios from '../../config/axios';

export default function Indicadores() {

  const [metricas, setMetricas] = useState([]);
  const [indicadores, setIndicadores] = useState([]);


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
          <h2>Añadir Indicador</h2>
          <AddIndicador metricas={metricas} indicadores={indicadores}/>
        </div>
        <div className="flex-large">
          <h2>Ver Indicadores</h2>

          <TablaIndicadores/>
        </div>
      </div>
    </div>
  );
}