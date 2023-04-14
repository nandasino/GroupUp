import { useState, useEffect } from "react";
import styled from "styled-components"; 
import { getIfJoined, postJoinGroup, deleteJoinGroup, getGroups } from "../../services/GroupUp";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function OutGroup({ vacancies, eventId }) {
  const [joined, setJoined] = useState(true);
  const [avaliable, setAvaliable] = useState(0);
  const { setEnter } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const joinedMessage = (await getIfJoined(eventId)).data.message
        if (joinedMessage ==="joined") {
          setJoined(true);
          setEnter(true);
        }
        if (joinedMessage ==="notJoined") {
          setJoined(false);
          setEnter(false);
        }
        const groupsData = (await getGroups(eventId)).data
        const numberOfParticipants = groupsData.length;
        const subtraction = vacancies - numberOfParticipants;
        setAvaliable(subtraction);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [joined]);

  async function handleJoin() {
      try {
        await deleteJoinGroup(eventId);
        setJoined(false)
      } catch (error) {
        console.log(error);
      }
  }
  return(
    <>  
      {avaliable <= 0 ? <p className="occupied">Grupo Ocupado</p>: <p className="available">{`Restam ${avaliable} vagas disponíveis`}</p>}
        <Box onClick={()=> handleJoin()}>
        <ion-icon name="enter-outline"></ion-icon>
        <p>Sair do grupo</p>
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