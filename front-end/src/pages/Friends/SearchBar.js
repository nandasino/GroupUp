import styled from "styled-components";
import { useState, useEffect } from "react";
import { getUserByName } from "../../services/GroupUp";
import RequestButton from "./RequestButton";

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const auth = JSON.parse(localStorage.getItem("groupUp"));

  async function handleForm(e){
    e.preventDefault();
    try {
      const dataUser = (await getUserByName(search)).data;
      setUser(dataUser);
      setShow(true);
      console.log(dataUser);
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <>
      <Container>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder= "Procure usuário"
            onChange= {(e)=>setSearch(e.target.value)}
          /> 
          <button type="submit"><ion-icon name="search"></ion-icon></button>
        </form>
      </Container>
      <Box show={show}>
        {user.length==0 ? "usuário não encontrado"
        : 
        <>
            <div className="user"><img src={user.image}/>{user.name}</div>
            {user.id == auth.id ? "": <RequestButton userId={user.id} user={user}/>}
        </>}
      </Box>
    </>
  )
}
const Box = styled.div`
  width: 611px;
  min-height: 50px;
  background-color: #52b6ff;
  opacity: 0.7;
  align-items: center;
  box-sizing:border-box;
  padding-left:10px;
  justify-content: space-between;
  display: ${(props) => (props.show ? "flex" : "none")};
  .user{
    display:flex;
    align-items: center;
  }
  @media (max-width: 614px) {
		width:90%;
  }
  img{
    width:30px;
    height:30px;
    border-radius: 15px;
    margin-right:10px;
    object-fit: cover;
  }
`
const Container = styled.div`
  width: 611px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  background: #ffffff;
  border-radius: 15px;
  form{
    width:100%;
    display:flex;
    align-items: center;
  }
  input{
    width: 85%;
    height: 45px;
    padding: 0 15px 1px 15px;
    border-radius: 8px;
    background: #fff;
    outline: none;
    border: none;
    font-size: 19px;
    font-family: "Lato";
    line-height: 23px;
    color: #707070;
  
    ::placeholder {
      font-size: 15px;
      font-family: "Lato";
      line-height: 23px;
      color: #c6c6c6;
    }
  }
  ion-icon {
    font-size: 20px;
  }
  button{
    border:none;
    background-color:white;
    cursor:pointer;
    height: 30px;
    outline: none;
  }
  @media (max-width: 614px) {
		width:90%;
  }
`