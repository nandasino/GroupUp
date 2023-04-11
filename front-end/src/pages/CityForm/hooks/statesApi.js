import { useEffect, useState } from "react";
import axios from "axios";

export const useStates = () => {
  const [ states, setStates ] = useState([]);
  useEffect(() => {
    const promise = axios.get("https://brasilapi.com.br/api/ibge/uf/v1")
    
    promise.then((res) => setStates(res.data))
    promise.catch((err) => console.log("não foi possível carregar os dados"))
  }, []);

  return {
    states
  }
}