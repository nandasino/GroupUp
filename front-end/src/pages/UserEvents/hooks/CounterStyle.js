import styled from "styled-components";
const CounterStyle = styled.div`

  box-sizing: border-box;
  transition: all ease 0.2s;
  margin-left:8px;

.calculator {
  font-family: 'Lato';
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
}

h2 {
  text-align: center;
  margin-right: 5px;
  font-size: 15px;
}

.cell {
  display: flex;
  justify-content: space-between ;
  align-items: center;
  height: 100%;
  width: 60px;
}

.cell .value {
  font-weight: 500;
}

.cell * {
  cursor: pointer;
}

.cell *:hover {
  filter: brightness(1.2);
}

`
const Button = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 24px;
  background-color: #0057ae;
  font-size: 20px;
`

export {
  CounterStyle,
  Button
}