import React from 'react'
import axios from 'axios'

import clienteAxios from '../../../config/axios'
class AddMetrica extends React.Component {

    state = {
        id : '',
        nombre: '',
        idIndicadores: []
    }

    onAddClick = () => {
        clienteAxios.post('/metricas/addmetricas',{
        id : this.state.id,
        nombre : this.state.nombre
        })
        clienteAxios.put('/indicadores/setmetricas',{
        id : this.state.id,
        idIndicadores: this.state.idIndicadores
        })
    }

    render(){
        return(
            <form>
            <label>ID</label>
            <input type="text" value={this.state.id} onChange={e => this.setState({
            id: e.target.value
            })}/>

            <label>Nombrer de la Meta</label>
            <input type="text" value={this.state.nombre} onChange={e => this.setState({
            nombre: e.target.value
            })}/>

    
            {/* <label>Selecciona los indicadores correspondientes</label>
                {this.props.indicadores.map((x, i) => 
                x.idMeta === 0 && x.Aprobado === 1? 
        
                <label key={i}>
                <input
                className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={x.id}
                    onChange={e => this.state.idIndicadores.includes(e.target.value) ? this.state.idIndicadores = this.state.idIndicadores.filter((item) => item !== e.target.value) : this.state.idIndicadores.push(e.target.value)
                    }/> {x.id} ㅤㅤㅤㅤ  {x.nombre}
                </label> */}
            :
            
            <button onClick={
            () => this.onAddClick()
            }>Enviar solicitud</button>
        </form>
        );
    }
}

export default AddMetrica;

