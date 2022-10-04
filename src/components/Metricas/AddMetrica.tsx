import React from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import clienteAxios from '../../../config/axios'

class AddMetrica extends React.Component {

    state = {
      id : '',
      nombre: '',
      idIndicadores: [],
      usado: false,
      boolid: false,
      nom: false
    }
  
    onAddClick = () => {
      var usado = false;
  
      this.props.metricas.map(x => x.id === this.state.id ?
        usado = true
        :x)
  
  
      if(this.state.id === '' || this.state.nombre === '' || usado){
        if (usado){
          this.setState( {
            usado : true,
          })
        }else{
          this.setState( {
            usado : false,
          })  
        }
        if (this.state.id === ''){
          this.setState( {
            boolid : true,
          })
        }else{
          this.setState( {
            boolid : false,
          })  
        }
        if (this.state.nombre === ''){
          this.setState( {
            nom : true,
          })
        }else{
          this.setState( {
            nom : false,
          })  
        }
        toast.error('Error! los campos no se llenaron correctamente', 
          {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
      }else{
        clienteAxios.post('metricas/addmetricas',{
          id : this.state.id,
          nombre : this.state.nombre
        })
        axios.put('indicadores/setmetricas',{
          id : this.state.id,
          idIndicadores: this.state.idIndicadores
        })
  
        this.setState( {
          id : '',
          nombre: '',
          idIndicadores: [],
          usado: false,
          boolid: false,
          nom: false
        })
        toast.success('Solicitud enviada correctamente', 
          {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
      }
    }
  
    render(){
      return(
        <>
        <form>
          <label>ID</label>
          {this.state.usado?
            <>
            <input type="text" value={this.state.id} style={{borderColor: 'red'}} onChange={e => this.setState({
              id: e.target.value
            })}/>
            <p style={{fontSize: '12px'}}>Ya existe una Metrica con esa id</p>
            </>
          : this.state.boolid?
            <>
            <input type="text" value={this.state.id} style={{borderColor: 'red'}} onChange={e => this.setState({
              id: e.target.value
            })}/>
            <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
            </>
          :
          <input type="text" value={this.state.id} onChange={e => this.setState({
            id: e.target.value
          })}/>
          }
  
          <label>Nombrer de la Métrica</label>
          
          {this.state.nom?
            <>
            <input type="text" value={this.state.nombre} style={{borderColor: 'red'}} onChange={e => this.setState({
              nombre: e.target.value
            })}/>
            <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
            </>
          :
          <input type="text" value={this.state.nombre} onChange={e => this.setState({
            nombre: e.target.value
          })}/>
          }
  
        <label>Selecciona los indicadores correspondientes</label>
          {this.props.indicadores.map((x, i) => 
          x.idMetrica === '0' && x.Aprobado === 1 ? 
    
          <label key={i}>
            <input
            className='checkbox'
              type="checkbox"
              name="lang"
              value={x.id}
              onChange={e => this.state.idIndicadores.includes(e.target.value) ? this.state.idIndicadores = this.state.idIndicadores.filter((item) => item !== e.target.value) : this.state.idIndicadores.push(e.target.value)
              }/> {x.id} ㅤㅤㅤㅤ  {x.nombre}
          </label>
          :
            <div/>      )}
  
        </form>
        <button onClick={
            () => this.onAddClick()
          }>Enviar solicitud</button>
        <ToastContainer theme="colored"/>
        </>
        
      );
    }
  }
  
  export default AddMetrica;
  
  
