import Requests from "./Requests";
import { TextContainer } from "../../components/Style/TextContainer";
import FriendsEvents from "./FriendsEvents";
import SearchBar from "./SearchBar";
import styled from "styled-components";

export default function Friends() {
  return(
    <Container>  
      <SearchBar/>
      <TextContainer>
        Solicitações
      </TextContainer>
      <Requests/>
      <TextContainer>
        Grupos de amigos
      </TextContainer>
      <FriendsEvents/>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`