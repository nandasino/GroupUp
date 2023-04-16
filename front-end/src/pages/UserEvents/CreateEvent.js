import styled from "styled-components";
import { PostsStyle } from "../../components/Style/PostsStyle.js"
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStates } from "../CityForm/hooks/statesApi.js";
import { useCities } from "../CityForm/hooks/citiesApi.js";
import { getCategories } from "../../services/GroupUp.js";
import Counter from "./hooks/Counter.js";
import { postEvent } from "../../services/GroupUp.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function CreateEvent() {
  const[selectedDate, setSelectedDate] = useState(null)
  const { states } = useStates();
  const [ stateSelected, setStateSelected ] = useState("");
  const { cities } = useCities({ uf: stateSelected });
  const [ citySelected, setCitySelected ] = useState("");
  const [categories, setCategories] = useState([]);
  const [ categorySelected, setCategorySelected ] = useState("");
  const [ isPublic, setIsPublic ] = useState(true);
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  const [post, setPost] = useState({
    address: "",
    description: "",
	});
  const [counter, setCounter] = useState(1);
  const { setUpdate } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (await getCategories()).data;
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleFormState = (e) => {
    setStateSelected(e.target.value);
  }

  const handleFormCity = (e) => {
    setCitySelected(e.target.value);
  }
  const handleFormCategory = (e) => {
    setCategorySelected(e.target.value);
  }

  function handleInput(e) {
		setPost({ ...post, [e.target.name]: e.target.value });
	}

  async function handleForm(e) {
    e.preventDefault();
    if(citySelected == "") {
      console.log("selecione uma cidade")
      return;
    }
    if(categorySelected == "") {
      console.log("selecione uma categoria")
      return;
    }
    const string = new Date(selectedDate).toString();
    const hour = string.substr(16, 5);
    const dataformat = new Date(selectedDate).toISOString();

    const category = Number(categorySelected);

    const postObject = {
			date: dataformat,
      hour: hour,
      isPublic: isPublic,
      city: citySelected,
      address: post.address,
      categoryId: category,
			vacancies: counter,
      description: post.description,
    }
    try {
      await postEvent(postObject);
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <>
      <PostsStyle>
        <Title>
          <img className="profile" src={auth.image} alt="Profile"/>
          <h1>Forme um grupo</h1>
        </Title>
        <Container>
          <form onSubmit={handleForm}>
            <DatePrivate>
              <DatePicker 
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-field"
              showTimeSelect
              id="date"
              placeholderText="Data"
              dateFormat="dd/MM/yyyy "
              required
              />
              <Public onClick={()=> setIsPublic(!isPublic)}>
              { 
                isPublic ? 
                (<><p>Público</p>
                <ion-icon name="earth-sharp">
                </ion-icon></>)
                : 
                (<><p>Privado</p>
                <ion-icon name="lock-closed-sharp"></ion-icon></>)
                }
              </Public>
            </DatePrivate>
            <City>
              <select onChange= { handleFormState }>
                {states.map((state) => (<option value={state.sigla}>{state.nome}</option>))}
              </select>
              {stateSelected !== "" ? 
                (
                  <select onChange={handleFormCity}>
                    {cities.map((city) => (<option value={city.nome}>{city.nome}</option>))}
                  </select>
                ) : "" }
            </City>
            <input 
              name="address"
              className="address" 
              onChange={handleInput} 
              value={post.address} 
              type="text" 
              placeholder="Endereço"
              required
            />
            <Game>
              <select onChange= { handleFormCategory }>
                {categories.map((category) => (<option value={category.id}>{category.name}</option>))}
              </select>
              <Counter counter={counter} setCounter={setCounter}/>
            </Game>
            <input
            name="description"
            className="description"
            onChange={handleInput}
            value={post.description}
            type="text" 
            placeholder="Descrição"
            />
            <Button>
              <button className="sendButton" type="submit">
                Postar Evento
              </button> 
            </Button>
          </form>
        </Container>
      </PostsStyle>
    </>
  )
}

const Button = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`
const DatePrivate = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  margin-bottom:10px;
  @media (max-width: 614px) {
    margin-left:20px;
	}
`
const Public = styled.div`
  color: #ffd900;
  font-size: 25px;
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  cursor:pointer;
  p{
    font-size: 20px;
    margin-right:5px;
  }
  @media (max-width: 614px) {
    p{
      display:none;
    }
	}
`
const Container = styled.div`
  width: 75%;
  form {
    display: flex;
    flex-direction: column;

    &.form-field{
      width:100%; 
    }
  }
  input {
    padding-left: 10px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 15px;
    &.description{
      height: 80px;
      width: 100%;
    }
  }
  select {
    padding-left: 10px;
    height: 45px;
    border: 1px solid #d5d5d5;
    background-color:#ffffff;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Lato';
    font-style: normal;
  }
  option {
    color: #707070;
  }
  input::placeholder {
    color: #c6c6c6;
    font-size: 19px;
    font-weight: 400;
    font-family: 'Lato';
    font-style: normal;
  }
  .sendButton {
    cursor:pointer;
    font-family: 'Lato';
    border: none;
    border: none;
    background-color: #0057ae;
    border-radius: 4.5px;
    width: 180px;
    height: 45px;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  }
`
const Game = styled.div`
 display:flex;
  width: 100%;
  height: 45px;
  margin-bottom: 6px;
  input {
    width: 60px;
    margin-left:5px;
  }
  select {
    width: 90%;
  }
`
const City = styled.div`
 display:flex;
  width: 100%;
  height: 45px;
  margin-bottom: 6px;
  justify-content: space-between;
  select {
    width: 48%;
  }
`