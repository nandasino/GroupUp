import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import { getUserGroups } from "../../services/GroupUp";
import { CardPostSyle, Title, Box } from "../../components/Style/CardPostStyle.js";
import Partipants from "../Participants/Participants.js";
import OutGroup from "./OutGroup.js";

export default function MapJoinedEvents() {
  const [userEvents, setUserEvents] = useState([]);
  const { update, enter } = useContext(UserContext);
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getUserGroups()).data;
        setUserEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userEvents, enter]);

  return(
    <>
      {userEvents.map((event) => (
      <CardPostSyle>
        <Title>
        <img className="profile" src={event.events.users.image} alt="Profile"/>
        <h1>{event.events.users.name}</h1>
        </Title>
        <Box>
        <div className="public">
          {event.events.isPublic ? <ion-icon name="earth-sharp"></ion-icon> : <ion-icon name="lock-closed-sharp"></ion-icon> }
        </div>
        <div className="titleAndDate">
          <h1>{event.events.categories.name}</h1>
          <div className="time">
            <p>{`${(event.events.date).substr(8, 2)}/${(event.events.date).substr(5, 2)}/${(event.events.date).substr(0,4)}`}</p>
            <p>{event.events.hour}</p>
          </div>
        </div>
          <div className="city">
            <ion-icon name="location-outline"></ion-icon>
            <p>{`${event.events.city}, ${event.events.address}`}</p>
          </div>
          <div className="description">
            <p>{event.events.description}</p>
          </div>
          <div className="vacancies">
            <OutGroup vacancies={event.events.vacancies} eventId={event.events.id}/>
          </div>
          <Partipants vacancies={event.events.vacancies} eventId={event.events.id}/>
        </Box>
      </CardPostSyle>))}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`