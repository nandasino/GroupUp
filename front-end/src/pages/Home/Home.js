import { useState, useEffect } from "react";
import CityForm from "../CityForm/CityForm";
import CityEvents from "../CityEvents/CityEvents";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UserEvents from "../UserEvents/UserEvents";
import Friends from "../Friends/Friends";

export default function Home() {
  const [close, setClose] = useState(false);
  const auth = JSON.parse(localStorage.getItem("city"));
  const userCity = auth.city;
  const [pageSelected, setPageSelected] = useState("mine");
  const [page,setPage] = useState(<UserEvents/>)
 
  useEffect(() => {
    
    if(pageSelected=="mine"){
      setPage(<UserEvents/>)
    }
    if(pageSelected=="city"){
      setPage(<CityEvents userCity={userCity} />)
    }
    if(pageSelected=="friends"){
      setPage(<Friends/>)
    }
  }, [pageSelected]);

  return(
    <>
    <Navbar/>
    <Container>
      {close | userCity !== null ?
        (
          <>
            {page}
            <Footer setPageSelected={setPageSelected } pageSelected={pageSelected}/>  
          </>
        )
      :
        (
          <Box>
            <Close><ion-icon onClick={()=>setClose(true)} name="close-outline"></ion-icon></Close>
              <h1>Selecione a sua cidade</h1>
            <CityForm setClose={setClose}/>
          </Box>
        )
      }
    </Container>
    </>
  )
}


const Container = styled.div`
  width:100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding-bottom:130px;
  padding-top:80px;
`
const Box = styled.div`
  display:flex;
  background-color: #52b6ff;
  width: 400px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1{
    color: #ffffff;
    font-size: 20px;
    font-family: 'Lato';
  }
  ion-icon{
    color: #ffffff;
  }
  @media (max-width: 614px) {
		border-radius: 0px;
    width:100%;
	}
`
const Close = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  padding-left:90%;
  color: #ffffff;
  font-size: 20px;
  box-sizing:border-box;
`