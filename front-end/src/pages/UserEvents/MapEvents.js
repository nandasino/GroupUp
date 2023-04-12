import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import { getUserEvents } from "../../services/GroupUp";

export default function MapEvents() {
  const [userEvents, setUserEvents] = useState([]);
  const { update } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = (await getUserEvents()).data;
        setUserEvents(eventsData);
        console.log(eventsData)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [update]);

  return(
    <>
      {userEvents.map((event) => (<Box>{event.categoryId}</Box>))}
    </>
  )
}

const Box = styled.div`
  width: 611px;
  height: 300px;
  background-color: white;
  border-radius: 16px;
  margin-top:20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 614px) {
		border-radius: 0px;
    width:100%;
	}
`