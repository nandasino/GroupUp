import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  font-family: 'Lato';
  font-style: normal;
  font-size:20px;
  font-weight: 300;
  margin-bottom:15px;
  img{
    width: 50px;
    height: 50px;
    border-radius:25px;
    margin-right:10px;
    border-radius: 35px;
    object-fit: cover;
  }
`
export {
  TextContainer,
}