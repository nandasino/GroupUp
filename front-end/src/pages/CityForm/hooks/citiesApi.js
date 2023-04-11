import { useEffect, useState } from "react";
import axios from "axios";

export const useCities = ({uf}) => {
  const [ cities, setCities ] = useState([]);
  useEffect(() => {
    const promise = axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
    
    promise.then((res) => setCities(res.data))
    promise.catch((err) => console.log("não foi possível carregar os dados"))
  }, [uf]);

  return {
    cities
  }
}