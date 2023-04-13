import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import { getUserEvents } from "../../services/GroupUp";
import { CardPostSyle, Title, Box } from "../../components/Style/CardPostStyle.js";

export default function MapEvents() {
  const [userEvents, setUserEvents] = useState([]);
  const { update } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getUserEvents()).data;
        setUserEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [update, userEvents]);

  return(
    <>
    <Container>
      Criados por você
      {userEvents.map((event) => (
      <CardPostSyle>
        <Title>
        <img className="profile" src={event.userProfile} alt="Profile"/>
        <h1>{event.userName}</h1>
        </Title>
        <Box>
        <div className="public">
          {event.isPublic ? <ion-icon name="earth-sharp"></ion-icon> : <ion-icon name="lock-closed-sharp"></ion-icon> }
        </div>
        <div className="titleAndDate">
          <h1>{event.categoryName}</h1>
          <div className="time">
            <p>{`${(event.date).substr(8, 2)}/${(event.date).substr(5, 2)}/${(event.date).substr(0,4)}`}</p>
            <p>{event.hour}</p>
          </div>
        </div>
          <div className="city">
            <ion-icon name="location-outline"></ion-icon>
            <p>{`${event.city}, ${event.address}`}</p>
          </div>
          <div className="description">
            <p>{event.description}</p>
          </div>
          <div className="vacancies">
            <p>{`Restam ${event.vacancies} vagas disponíveis`}</p>
          </div>
        </Box>
      </CardPostSyle>))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`