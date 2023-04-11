import { useState, useEffect } from "react";
import CityForm from "../CityForm/CityForm";
import CityEvents from "../CityEvents/CityEvents";
import styled from "styled-components";
import { getUserCity } from "../../services/GroupUp";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [close, setClose] = useState(false);
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  const userCity = auth.city;
  //const [userCity, setUserCity] = useState(null);

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const cityData = (await getUserCity()).data;
        if(cityData.city) {
          setUserCity(cityData.city);
        }
        console.log(cityData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);*/

  return(
    <>
    <Navbar/>
    <Container>
      {close | userCity !== null ? (
        <CityEvents userCity={userCity} />
      ): (
      <Box>
        <Close><ion-icon onClick={()=>setClose(true)} name="close-outline"></ion-icon></Close>
        <h1>Selecione a sua cidade</h1>
        <CityForm/>
      </Box>
      )}
    </Container>
    <Footer/>
    </>
  )
}


const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`
const Box = styled.div`
  display:flex;
  background-color: #FFFFFF;
  width: 300px;
  height: 375px;
  flex-direction: column;
  align-items: center;
  border-radius:15px;
  h1{
    color: #52b6ff;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
  }
  ion-icon{
    color: #52b6ff;
  }
`
const Close = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  padding-left:260px;
  color: #ffffff;
  font-size: 20px;
  box-sizing:border-box;
`