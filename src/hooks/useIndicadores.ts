import { useContext } from "react";
import { IndicadoresContext } from "../context/IndicadoresContxt";

const useIndicadores = () => {
    return useContext(IndicadoresContext);
}

export default useIndicadores; 