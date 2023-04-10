import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Logo from "../../assets/images/Logo.png"
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/GroupUp";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  async function handleForm(e) {
    e.preventDefault();
    try {
      const data = await postSignIn({
        email: signIn.email,
        password: signIn.password,
      });
      const JSONauth = JSON.stringify({
        token: data.data.token,
      });
      localStorage.setItem("groupUp", JSONauth);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  function handleInput(e) {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  }

  return(
    <>
      <Container disabled = { disabled }>
        <img src={Logo} alt="Logo" />
        <h1>GroupUp</h1>
        <form onSubmit={handleForm}>
          <input
            autoComplete="off"
            value={signIn.email}
            required
            disabled={disabled}
            name="email"
            type="email"
            placeholder="email"
            onChange={handleInput}
          />
          <input
            required
            disabled={disabled}
            name="password"
            type= "password"
            placeholder="senha"
            onChange={handleInput}
            value={signIn.password}
          />
          <button disabled={disabled} type="submit">
            {!disabled ?
              ("Entrar") 
              :
              (<ThreeDots color="#FFFFFF" height={80} width={80} />)
            }
          </button>          
        </form>
        <Link to={`/sign-up`}>Não tem uma conta? Cadastre-se!</Link>
      </Container>
    </>
  )
}
const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0057ae;
  img {
    margin-top: 48px;
  }
  h1 {
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: #ffd900;
    margin-bottom: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding-left: 10px;
    width: 289px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 15px;
  }
  input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
  }
  input:focus {
    box-shadow: 0;
    outline: 0;
  }
  button {
    font-family: "Lexend Deca";
    border: none;
    background-color: #52b6ff;
    border-radius: 4.5px;
    width: 303px;
    height: 45px;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  }
  a {
    color: #52b6ff;
    font-size: 14px;
    align-self: center;
    margin-top: 25px;
  }
`