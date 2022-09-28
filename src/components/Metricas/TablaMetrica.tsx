import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import clienteAxios from '../../../config/axios';

function TablaMetrica(props : any) {

    const [metricas, setMetricas] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await clienteAxios.get('/metricas/lista');
        setMetricas(res.data);
        };
        fetchPosts();
    }, []);
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Opción</th>
            </tr>
            </thead>
            <tbody>
            {metricas.map((metrica) => (
                metrica.Aprobado === 1 ?
                <tr key={metrica.id}>
                    <td>{metrica.id}</td>
                    <td>{metrica.nombre}</td>
                    <td>
                    {/* <button className="button muted-button">Edit</button> */}
                    <button className="button muted-button delete" onClick={() => 
                        clienteAxios.put(`/metricas/setpeticion/${metrica.id}`,
                        window.location.reload(true))
                        }>Eliminar</button>
                    </td>
                </tr>
                :
                metrica.Peticion === 'Añadir'?
                <tr key={metrica.id} style={{backgroundColor: "#c6fbd8ad"}}>
                <td>{metrica.id}</td>
                <td>{metrica.nombre}</td>
                <td style={{color: "green"}}>Peticion Añadir</td>
                </tr>
                :
                <tr key={metrica.id} style={{backgroundColor: "#feb6b8a8"}}>
                <td>{metrica.id}</td>
                <td>{metrica.nombre}</td>
                <td style={{color: "red"}}>Peticion Eliminar</td>
                </tr>
                ))
            }
            </tbody>
        </table>
        
    )
}

export default TablaMetrica