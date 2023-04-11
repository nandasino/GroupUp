import { getCityEvents } from "../../services/GroupUp";
import { useState, useEffect } from "react";

export default function CityEvents({userCity}) {
  const [cityEvents, setCityEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getCityEvents(userCity)).data;
        setCityEvents(eventsData);
        console.log(eventsData)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return(
    <>
      {cityEvents.length==0? ("Não há eventos na sua cidade ainda"):(<>{cityEvents.map((event) => (<>{event.game}</>))}</>)}
    </>
  )
}