import { useState, useEffect } from "react";
import styled from "styled-components"; 
import { getGroups } from "../../services/GroupUp";

export default function Partipants({ vacancies, eventId }) {
  const [ participants, setPartipants ] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = (await getGroups(eventId)).data
        const numberOfParticipants = groupsData.length;
        setPartipants(numberOfParticipants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return(
    <>  
      <Box>
        <p>{`Esse grupo tem ${participants} participantes`}</p>
      </Box>  
    </>
  )
}

const Box = styled.div`
  display:flex;
  font-size: 18px;
  width:150px;
  align-items: center;
  justify-content: space-between;
`