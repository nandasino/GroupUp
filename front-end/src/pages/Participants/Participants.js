import { useState, useEffect } from "react";
import styled from "styled-components"; 
import { getGroups } from "../../services/GroupUp";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Partipants({ vacancies, eventId }) {
  const [ participants, setPartipants ] = useState(0);
  const { enter } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [expand, setExpand] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = (await getGroups(eventId)).data
        const numberOfParticipants = groupsData.length;
        setPartipants(numberOfParticipants);
        setUsers(groupsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [enter, expand]);

  return(
    <Container>  
      <Box>
        <p>{`Esse grupo tem ${participants} participantes até o momento`}</p>
        <SeeAll onClick={()=>setExpand(!expand)}>
          {expand ? <ion-icon name="arrow-up-outline"></ion-icon>
          : 
          <><ion-icon name="people-outline"></ion-icon><p>Ver todos</p></>}
        </SeeAll>
      </Box>
      <Users>
        {expand ? <>{users.map((user) => <UserBox><img src={user.users.image}/>{user.users.name}</UserBox>)}</> : ""}
      </Users>
    </Container>
  )
}
const Container = styled.div`
  margin-top:15px;
  display:flex;
  width:100%;
  align-items: center;
  flex-direction: column;
`

const Box = styled.div`
  display:flex;
  font-size: 13px;
  width:100%;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  ion-icon{
    font-size: 20px;
  }
`
const Users = styled.div`
  display:flex;
  width:100%;
  margin-top:10px;
  margin-bottom:15px;
  flex-direction: column;
`
const SeeAll = styled.div`
  display:flex;
  width:80px;
  align-items: center;
  justify-content: flex-end;
`
const UserBox = styled.div`
  display:flex;
  width:100%;
  align-items: center;
  margin-top:5px;
  font-size:11px;
  img{
    width:20px;
    heigth:20px;
    border-radius: 20px;
  }
`