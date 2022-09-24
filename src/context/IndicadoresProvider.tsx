import React, {createContext, useState } from 'react'
import {IndicadoresContext} from "./IndicadoresContxt"
import { Indicador } from '../interfaces/Indicador'
import PropTypes from 'prop-types'

const INITIAL_STATE: Indicador ={
    id: '',
    CalificacionCORFO: 'minimo',
    NumeroIndicador: '',
    MisionUniversitaria: 'Primera',
    nombre: '',
    TipoIndicador: 'Entrada resultado',
    eje: 'Gobernanza y Sinergias',
    Unidad: '',
    FuenteInformacion: '',
    Responsable: '',
    Frecuencia: '',
    idMetrica: 0,
    idMeta: 0
}


interface props {
    children: JSX.Element | JSX.Element[]
}

const IndicadoresProvider = ({children} :  props)  => {

    const [indicador, setIndicador] = useState(INITIAL_STATE);
    const [indicadores , setIndicadores] = useState([]);

    return (
        <IndicadoresContext.Provider
            value={{
                indicador,
                setIndicador

            }}
        >
            { children }
        </IndicadoresContext.Provider>
    )
}

export{
    IndicadoresProvider
    
}

export default IndicadoresContext;

