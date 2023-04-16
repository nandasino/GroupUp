import { useState, useEffect } from "react";
import { CardPostSyle, Title, Box } from "../../components/Style/CardPostStyle.js";
import styled from "styled-components"; 
import EnjoinGroup from "../CityEvents/EnjoinGroup"
import Partipants from "../Participants/Participants";
import { getFriendEvents } from "../../services/GroupUp.js";

export default function FriendEvents({friendId}) {
  const [friendEvents, setFriendEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getFriendEvents(friendId)).data;
        setFriendEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return(
    <>
        {friendEvents.length==0 ?
          ("Não criou nenhum grupo ainda")
          :
          (<>
            {friendEvents.map((event) => (
              <CardPostSyle>
                <Title>
                <img className="profile" src={event.users.image} alt="Profile"/>
                <h1>{event.users.name}</h1>
                </Title>
                <Box>
                <div className="public">
                  {event.isPublic ? <ion-icon name="earth-sharp"></ion-icon> : <ion-icon name="lock-closed-sharp"></ion-icon> }
                </div>
                <div className="titleAndDate">
                  <h1>{event.categories.name}</h1>
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
                    <EnjoinGroup vacancies={event.vacancies} eventId={event.id}/>
                  </div>
                    <Partipants vacancies={event.vacancies} eventId={event.id}/>
                </Box>
              </CardPostSyle>
            ))}
          </>)
        }
    </>
  )
}