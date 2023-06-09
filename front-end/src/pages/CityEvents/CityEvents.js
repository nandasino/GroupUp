import { getCityEvents } from "../../services/GroupUp";
import { useState, useEffect } from "react";
import { CardPostSyle, Title, Box } from "../../components/Style/CardPostStyle.js";
import styled from "styled-components"; 
import EnjoinGroup from "./EnjoinGroup";
import Partipants from "../Participants/Participants";
import { TextContainer } from "../../components/Style/TextContainer";

export default function CityEvents({userCity}) {
  const [cityEvents, setCityEvents] = useState([]);
  const auth = JSON.parse(localStorage.getItem("groupUp"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getCityEvents(userCity)).data;
        setCityEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return(
    <>
      {userCity==null ? 
        <TextContainer>Selecione sua cidade para descobrir quais eventos estão havendo nela</TextContainer>
        :
        (<>{cityEvents.length==0 ?
          (<TextContainer>Ainda não há nenhum evento criado em sua cidade</TextContainer>)
          :
          (<>
            {cityEvents.map((event) => (
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
                    {event.userId===auth.id ? "" : 
                    <EnjoinGroup vacancies={event.vacancies} eventId={event.id}/>}
                  </div>
                    <Partipants vacancies={event.vacancies} eventId={event.id}/>
                </Box>
              </CardPostSyle>
            ))}
          </>)
          }
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