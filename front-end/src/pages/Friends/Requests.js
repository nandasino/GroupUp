import { useState, useEffect } from "react";
import { getRequests, requestAccepted } from "../../services/GroupUp";
import styled from "styled-components";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestsData = (await getRequests()).data;
        setRequests(requestsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    }, [reload]);

    async function sentAccept(requestId) {
        try {
          await requestAccepted(requestId);
          setReload(!reload);
        } catch (error) {
          console.log(error);
        }
    }

    return(
      <Container>
        {requests.map((request) => (
          <RequestDiv>
            <User>
            <img src={request.image}/><p>{`${request.name} quer ver os grupos criados por você`}</p>
            </User>
            <Accept onClick={() => sentAccept(request.id)}>
              <ion-icon name="add-outline"></ion-icon>
              <h1>Aceitar</h1>
            </Accept>
          </RequestDiv>
        ))}
      </Container>
    )
}

const Container = styled.div`
  width:90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const RequestDiv = styled.div`
  width:100%;
  height:50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #52b6ff;
  margin-bottom: 15px;
  font-family: 'Lato';
  font-style: normal;
`
const User = styled.div`
  width:90%;
  display: flex;
  align-items: center;
  margin-left:15px;
  font-size:15px;
  color: white;
  img{
    width:30px;
    height:30px;
    border-radius: 15px;
    object-fit: cover;
    margin-right:15px;
  }
  @media (max-width: 614px) {
		font-size:10px;
`
const Accept = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  padding-right:15px;
  color: white;
  font-size:18px;
  ion-icon{
    font-size: 25px;
  }
  @media (max-width: 614px) {
    padding-right:0px;
		font-size:12px;
    ion-icon{
      font-size: 15px;
    }
	}
`