import styled from "styled-components";

const CardPostSyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 611px;
  height: 330px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left:10px;
  padding-top:10px;
  margin-top:10px;
  font-family: 'Roboto';
  font-style: normal;
  h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    color: ;
  }
  img{
    width: 70px;
    border-radius:35px;
    margin-right:5px;
  }
  .titleAndDate{
    width: 100%;
    display:flex;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;
    p{
      margin-left:10px;
    }
    h1{
      font-size:22px;
      font-style: normal;
      font-weight: 400;
    }
  }
  .time{
    width: 180px;
    display:flex;
    align-items: center;
  }
  .city{
    width:100%;
    display:flex;
    margin-top:15px;
    font-size:17px;
    ion-icon{
      font-size:20px;
      margin-right:5px;
    }
  }
  .vacancies{
    display:flex;
    margin-top:15px;
    font-size:14px;
    margin-top:15px;
  }
  .description{
    background-color:#ecf7fb;
    display:flex;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    width: 100%;
    height: 80px;
    line-break: normal;
    margin-top:15px;
  }
  .public{
    width:100%;
    display:flex;
    color: #ffd900;
    font-size: 25px;
    align-items: center;
    justify-content: end;
    margin-bottom:15px;
  }
  @media (max-width: 614px) {
		border-radius: 0px;
    width:100%;
	}
`
const Title = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  margin-bottom:10px;
`
const Box = styled.div`
  width: 90%;
  display:flex;
  align-items: center;
  flex-direction: column;
`
export {
  CardPostSyle,
  Title,
  Box,
}