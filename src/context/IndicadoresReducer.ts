import { Indicador, IndicadoresState } from "../interfaces/Indicador";


type IndicadoresAction = 
    | {type : "agregarIndicador", payload: Indicador};



export const IndicadoresReducer = (state : IndicadoresState, action : IndicadoresAction): IndicadoresState => {

    switch (action.type) {
        case "agregarIndicador":

            return{ 
                ...state, 
                listaIndicadores: [...state.listaIndicadores, action.payload]
            }
                
                break;
    
        default:
            return state ;
    }

}