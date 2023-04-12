import axios from "axios";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("groupUp"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

async function postSignIn(signIn) {
  const promise = await axios.post(`${process.env.REACT_APP_API}/signin`, signIn);
  return promise;
}

async function postSignUp(signUp) {
  const promise = await axios.post(`${process.env.REACT_APP_API}/signup`, signUp);
  return promise;
}

async function updateCity(city) {
  const config = createHeaders();
  const promise = await axios.put(`${process.env.REACT_APP_API}/usercity`, city, config);
  return promise;
}

async function getCityEvents(city) {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/events/${city}`, config);
  return promise;
}

async function getUser() {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/user`, config);
  return promise;
}

async function getCategories() {
  const promise = await axios.get(`${process.env.REACT_APP_API}/catergories`);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getCityEvents,
  updateCity,
  getUser,
  getCategories,
};