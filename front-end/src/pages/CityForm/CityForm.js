import styled from "styled-components";
import { useStates } from "./hooks/statesApi";
import { useCities } from "./hooks/citiesApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postCity } from "../../services/GroupUp";

export default function CityForm() {
  const { states } = useStates();
  const [ stateSelected, setStateSelected ] = useState("");
  const { cities } = useCities({ uf: stateSelected });
  const [ citySelected, setCitySelected ] = useState("");
  const navigate = useNavigate();

  const handleFormState = (e) => {
    setStateSelected(e.target.value);
  }

  const handleFormCity = (e) => {
    setCitySelected(e.target.value);
    console.log(e.target.value)
  }
  
  async function sendCity(e) {
    e.preventDefault();
    if(citySelected == "") {
      console.log("selecione uma cidade")
      return;
    }
    try {
      await postCity({
        city: citySelected,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <Box>
      <select onChange= { handleFormState }>
        {states.map((state) => (<option value={state.sigla}>{state.nome}</option>))}
      </select>
      {stateSelected !== "" ? (
        <select onChange={handleFormCity}>
            {cities.map((city) => (<option value={city.nome}>{city.nome}</option>))}
        </select>
      ) : "" }
      <button onClick={sendCity}>Enviar</button>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  select {
    padding-left: 10px;
    width: 200px;
    min-height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 15px;
  }
  button {
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    border: none;
    background-color: #52b6ff;
    border-radius: 4.5px;
    width: 180px;
    height: 45px;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  }
`