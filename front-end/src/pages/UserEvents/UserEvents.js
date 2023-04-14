import CreateEvent from "./CreateEvent.js"
import MapEvents from "./MapEvents.js"
import MapJoinedEvents from "./MapJoinedEvents.js"
import { TextContainer } from "../../components/Style/TextContainer";

export default function UserEvents() {
  return(
    <>
      <CreateEvent/>
      <TextContainer>Criados por você</TextContainer>
      <MapEvents/>
      <TextContainer>Grupos que você participa</TextContainer>
      <MapJoinedEvents/>
    </>
  )
}