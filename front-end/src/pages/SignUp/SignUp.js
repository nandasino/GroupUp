import { useContext, useState } from "react";
import Logo from "../../assets/images/Logo.png"
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/GroupUp";

export default function SignUp() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  async function handleForm(e) {
    e.preventDefault();
    try {
      await postSignUp({
        name: formValue.name,
        image:formValue.image,
        email: formValue.email,
        password: formValue.password,
        confirmPassword: formValue.confirmPassword,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleInput(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  return(
    <>
      <Container disabled = { disabled }>
        <img src={Logo} alt="Logo" />
        <h1>GroupUp</h1>
        <form onSubmit={handleForm}>
          <input
            autoComplete="off"
            required
            disabled={disabled}
            name="email"
            type="email"
            placeholder="email"
            value={formValue.email}
            onChange={handleInput}
          />
          <input
            required
            disabled={disabled}
            name="password"
            type= "password"
            placeholder="senha"
            value={formValue.password}
            onChange={handleInput}
          />
          <input
            required
            disabled={disabled}
            name="confirmPassword"
            type= "password"
            value={formValue.confirmPassword}
            placeholder="confirme a senha"
            onChange={handleInput}
          />
          <input
            disabled={disabled}
            required
            name="name"
            value={formValue.name}
            type="text"
            placeholder="nome"
            onChange={handleInput}
          />
          <input
            disabled={disabled}
            required
            name="image"
            value={formValue.image}
            type="url"
            placeholder="foto"
            onChange={handleInput}
          />
          <button disabled={disabled} type="submit">
            {!disabled ?
              ("Cadastrar") 
              :
              (<ThreeDots color="#FFFFFF" height={80} width={80} />)
            }
          </button>          
        </form>
        <Link to={`/`}>Já tem uma conta? Faça login!</Link>
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