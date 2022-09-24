import React from 'react'

import ListaIndicadores from '../components/Peticiones/ListaIndicadores';
import ListaMetricas from '../components/Peticiones/ListaMetricas';
import ListaMetas from '../components/Peticiones/ListaMetas';
function Peticiones() {
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