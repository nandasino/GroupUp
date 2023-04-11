import styled from "styled-components";
import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  console.log(auth.image)
  return(
    <>
      <Container>
        <LogoDiv>
          <img src={Logo} alt="Logo" />
          <h1>GroupUp</h1>
        </LogoDiv>
        <img className="profile" src={auth.image} alt="Profile"/>
      </Container>
    </>
  )
}


const Container = styled.div`
  width:100%;
  height: 80px;
  display: flex;
  background-color: #0057ae;
  align-items: center;
  justify-content: space-between;
  position:fixed;
  z-index:1;
  top: 0;
  left:0;
  img{
    width: 70px
  }
  .profile{
    border-radius:35px;
    padding-right:10px;
  }
`
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 80px;
  padding-left:10px;
  h1 {
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #ffd900;
  }
`;