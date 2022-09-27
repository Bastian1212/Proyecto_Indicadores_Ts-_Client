import React, {createContext } from 'react'
import { IndicadoresProvider } from './IndicadoresProvider';
import {IndicadoresState} from "../interfaces/Indicador"
export type  IndicadorContextPros = {
    indicadoresState : IndicadoresState
}

export const IndicadoresContext = createContext<IndicadorContextPros>({} as IndicadorContextPros);