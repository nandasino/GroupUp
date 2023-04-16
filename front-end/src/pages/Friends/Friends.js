import Requests from "./Requests";
import { TextContainer } from "../../components/Style/TextContainer";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import MapFriends from "./MapFriends";

export default function Friends() {
  return(
    <Container>  
      <SearchBar/>
      <TextContainer>
        Solicitações
      </TextContainer>
      <Requests/>
      <TextContainer>
        Seguindo
      </TextContainer>
      <MapFriends/>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`