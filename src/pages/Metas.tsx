import React from 'react'
import AddMeta from '../components/Metas/AddMeta';
import TablaMeta from '../components/Metas/TablaMeta';


import { useEffect, useState } from "react";
import axios from "axios";


const Metas = () => {
    const [indicadores, setIndicadores] = useState([]);


    

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Añadir Meta</h2>
                    <AddMeta/>
                </div>
                <div className="flex-large">
                    <h2>Ver Meta</h2>
                    <TablaMeta/>
                </div>
            </div>
        </div>
    );
}

export default Metas