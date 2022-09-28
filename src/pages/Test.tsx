import React, {useContext} from 'react'
import IndicadoresContext from '../context/IndicadoresProvider'
import useIndicadores from '../hooks/useIndicadores'

const test = () => {

    const {indicadoresState} =  useContext(IndicadoresContext);
    const {Indicador} = indicadoresState
    return (
        <form>
            <label>Calificación CORFO</label>
            <select value={Indicador.CalificacionCORFO} onChange={() => {}}>
            <option value="Mínimo">Mínimo</option>
            <option value="Crítico">Crítico</option>
            </select>
        
        </form>
    )
}

export default test