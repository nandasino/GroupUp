import styled from "styled-components";
import { useState } from "react";

export default function Footer() {
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  console.log(auth.image)
  const [pageSelected, setPageSelected] = useState({});

  function selectPage(page) {
    if (page === pageSelected) {
      return;
    }
    setPageSelected(page);
  }

  return(
    <>
      <Container>
        <LogoDiv onClick={() => selectPage("city")} className={pageSelected === "city" ? 'selected' : ''}><ion-icon name="map-outline"></ion-icon><p>Em sua cidade</p></LogoDiv>
        <LogoDiv onClick={() => selectPage("mine")} className={pageSelected === "mine" ? 'selected' : ''}><ion-icon name="basketball-outline"></ion-icon><p>Seus grupos</p></LogoDiv>
        <LogoDiv onClick={() => selectPage("friends")} className={pageSelected === "friends" ? 'selected' : ''}><ion-icon name="football-outline"></ion-icon><p>Grupos de amigos</p></LogoDiv>
      </Container>
    </>
  )
}


const Container = styled.div`
  width:100%;
  height: 100px;
  display: flex;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-around;
  position:fixed;
  z-index:1;
  bottom: 0;
  left:0;
  color: #0057ae;
  ion-icon{
    font-size:50px;
    font-weight: 500;
  }
`
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 80px;
  p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-top:5px;
  }
  &.selected {
    color: #52b6ff;
  }
`;