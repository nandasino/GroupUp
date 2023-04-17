import Requests from "./Requests";
import { TextContainer } from "../../components/Style/TextContainer";
import FriendEvents from "./FriendEvents";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { getFriends } from "../../services/GroupUp";
import { useState, useEffect } from "react";

export default function MapFriends() {
  const [friends, setFriends] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friendsData = (await getFriends()).data;
        console.log(friendsData);
        setFriends(friendsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return(
    <>
    <Container>
      {friends.map((friend) => (
        <>
          <TextContainer>
            <img src={friend.users.image}/><p>{friend.users.name}</p>
          </TextContainer>
          <FriendEvents friendId={friend.friendId}/>
          </>
      ))}
    </Container>
    </>
  )
}

const Container = styled.div`
  width: 611px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 614px) {
		width:90%;
  }
`