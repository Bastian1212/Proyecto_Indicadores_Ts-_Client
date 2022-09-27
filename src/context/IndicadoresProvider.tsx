import React, { useState , useReducer } from 'react'
import {IndicadoresContext} from "./IndicadoresContxt"
import { Indicador, IndicadoresState } from '../interfaces/Indicador'
import PropTypes from 'prop-types'
import { IndicadoresReducer } from './IndicadoresReducer'

const INITIAL_STATE: IndicadoresState ={
    listaIndicadores : [] 
}


interface props {
    children: JSX.Element | JSX.Element[]
}

const IndicadoresProvider = ({children} :  props)  => {

    
    
    const [indicadoresState  , dispatch] = useReducer(IndicadoresReducer , INITIAL_STATE )

    return (
        <IndicadoresContext.Provider
            value={{
                indicadoresState

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

