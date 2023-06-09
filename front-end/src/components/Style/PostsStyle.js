import styled from "styled-components";

const PostsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 611px;
  height: 430px;
  background-color: #52b6ff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left:10px;
  padding-top:10px;
  h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    color: #ffffff;
  }
  img{
    margin-right:10px;
    width:60px;
    height:60px;
    border-radius: 35px;
    object-fit: cover;
  }
  @media (max-width: 614px) {
		border-radius: 0px;
    width:100%;
	}
`
export {
  PostsStyle,
}