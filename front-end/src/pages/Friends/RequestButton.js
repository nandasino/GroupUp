import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRequest, postRequest } from "../../services/GroupUp";

export default function RequestButton({userId, user}) {
  const [request, setRequest] = useState([]);
  const [sent, setSent] = useState(false);
  const auth = JSON.parse(localStorage.getItem("groupUp"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = (await getRequest(userId)).data;
        setRequest(requestData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    }, [user, sent]);

    async function sendRequest(){
      const id = Number(userId)
      try {
        await postRequest({
          userId: auth.id,
          friendId: userId
        });
        setSent(!sent);
        console.log("mandou");
      } catch (error) {
        console.log(error);
      }
    }
  return(
    <>
      {request.length === 0 ? 
      <Add onClick={() => sendRequest()}><ion-icon name="add-outline"></ion-icon>Adicionar</Add>
      :
      <>{request.accepted ? "seu amigo" : "solicitado"}</>}
    </>
  )
}

const Add = styled.div`
  cursor: pointer;
`