import React, {useContext} from 'react'
import IndicadoresContext from '../context/IndicadoresProvider'
import useIndicadores from '../hooks/useIndicadores'

const test = () => {

    const {indicadoresState} =  useContext(IndicadoresContext);
    const {Indicador} = indicadoresState
    return(
        <div>
            <h1>hola</h1>
        </div>
    )
}

export default test