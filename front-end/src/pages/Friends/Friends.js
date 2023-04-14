import Requests from "./Requests";
import { TextContainer } from "../../components/Style/TextContainer";
import FriendsEvents from "./FriendsEvents";

export default function Friends() {
  return(
    <>
      <TextContainer>
        Solicitações
      </TextContainer>
      <Requests/>
      <TextContainer>
        Grupos de amigos
      </TextContainer>
      <FriendsEvents/>
    </>
  )
}