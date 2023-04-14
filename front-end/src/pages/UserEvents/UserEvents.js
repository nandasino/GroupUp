import CreateEvent from "./CreateEvent.js"
import MapEvents from "./MapEvents.js"
import MapJoinedEvents from "./MapJoinedEvents.js"

export default function UserEvents() {
  return(
    <>
      <CreateEvent/>
      <MapEvents/>
      <MapJoinedEvents/>
    </>
  )
}