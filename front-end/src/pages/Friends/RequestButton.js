import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRequest } from "../../services/GroupUp";

export default function RequestButton({userId, user}) {
  const [request, setRequest] = useState([]);
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
    }, [user]);

  return(
    <>
      {request.length === 0 ? "adicionar": <>{request.accepted ? "seu amigo" : "espera"}</>}
    </>
  )
}