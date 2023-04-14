import styled from "styled-components";
import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  console.log(auth.image)
  return(
    <>
      <Container>
        <LogoDiv>
          <img  className="logo" src={Logo} alt="Logo" />
          <h1>GroupUp</h1>
        </LogoDiv>
        <img className="profile" src={auth.image} alt="Profile"/>
      </Container>
    </>
  )
}


const Container = styled.div`
  width:100%;
  height: 60px;
  display: flex;
  background-color: #0057ae;
  align-items: center;
  justify-content: space-between;
  position:fixed;
  z-index:1;
  top: 0;
  left:0;
  .logo{
    width: 60px;
  }
  .profile{
    width: 50px;
    height: 50px;
    border-radius:25px;
    margin-right:10px;
    border-radius: 35px;
    object-fit: cover;
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