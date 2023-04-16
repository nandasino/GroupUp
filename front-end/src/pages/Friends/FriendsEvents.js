import { useState, useEffect } from "react";
import { CardPostSyle, Title, Box } from "../../components/Style/CardPostStyle.js";
import styled from "styled-components"; 
import EnjoinGroup from "../CityEvents/EnjoinGroup"
import Partipants from "../Participants/Participants";
import { getFriendsEvents } from "../../services/GroupUp";
import { TextContainer } from "../../components/Style/TextContainer";

export default function FriendsEvents() {
  const [friendsEvents, setFriendsEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getFriendsEvents()).data;
        console.log(eventsData);
        setFriendsEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
return(
    <>
        {friendsEvents.length==0 ?
          ("Seus amigos não criaram nenhum evento ainda")
          :
          (<>
            {friendsEvents.map((event) => (
              <CardPostSyle>
                <Title>
                <img className="profile" src={event.users_friends_userIdTousers.image} alt="Profile"/>
                <h1>{event.users_friends_userIdTousers.name}</h1>
                </Title>
                <Box>
                <div className="public">
                  {event.users_friends_userIdTousers.events[0].isPublic ? <ion-icon name="earth-sharp"></ion-icon> : <ion-icon name="lock-closed-sharp"></ion-icon> }
                </div>
                <div className="titleAndDate">
                  <h1>{event.users_friends_userIdTousers.events[0].categories.name}</h1>
                  <div className="time">
                    <p>{`${(event.users_friends_userIdTousers.events[0].date).substr(8, 2)}/${(event.users_friends_userIdTousers.events[0].date).substr(5, 2)}/${(event.users_friends_userIdTousers.events[0].date).substr(0,4)}`}</p>
                    <p>{event.users_friends_userIdTousers.events[0].hour}</p>
                  </div>
                </div>
                  <div className="city">
                    <ion-icon name="location-outline"></ion-icon>
                    <p>{`${event.users_friends_userIdTousers.events[0].city}, ${event.users_friends_userIdTousers.events[0].address}`}</p>
                  </div>
                  <div className="description">
                    <p>{event.users_friends_userIdTousers.events[0].description}</p>
                  </div>
                  <div className="vacancies">
                    <EnjoinGroup vacancies={event.users_friends_userIdTousers.events[0].vacancies} eventId={event.users_friends_userIdTousers.events[0].id}/>
                  </div>
                    <Partipants vacancies={event.users_friends_userIdTousers.events[0].vacancies} eventId={event.users_friends_userIdTousers.events[0].id}/>
                </Box>
              </CardPostSyle>
            ))}
          </>)
        }
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`
