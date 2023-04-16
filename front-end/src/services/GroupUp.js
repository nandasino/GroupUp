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

async function getUserById(id) {
  const promise = await axios.get(`${process.env.REACT_APP_API}/user/${id}`);
  return promise;
}


async function getCategories() {
  const promise = await axios.get(`${process.env.REACT_APP_API}/catergories`);
  return promise;
}


async function postEvent(event) {
  const config = createHeaders();
  const promise = await axios.post(`${process.env.REACT_APP_API}/events`, event, config);
  return promise;
}

async function getUserEvents() {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/events`, config);
  return promise;
}

async function getIfJoined(eventId) {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/usergroup/${eventId}`, config);
  return promise;
}


async function postJoinGroup(eventId) {
  const config = createHeaders();
  const promise = await axios.post(`${process.env.REACT_APP_API}/groups`, eventId, config);
  return promise;
}

async function deleteJoinGroup(eventId) {
  const config = createHeaders();
  const promise = await axios.delete(`${process.env.REACT_APP_API}/groups/${eventId}`, config);
  return promise;
}
async function getGroups(eventId) {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/groups/${eventId}`, config);
  return promise;
}
async function getUserGroups() {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/groups`, config);
  return promise;
}
async function getRequests() {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/requests`, config);
  return promise;
}

async function getRequest(friendId) {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/friends/${friendId}`, config);
  return promise;
}

async function requestAccepted(requestId) {
  const config = createHeaders();
  const promise = await axios.put(`${process.env.REACT_APP_API}/requests/${requestId}`, config);
  return promise;
}

async function getFriendsEvents() {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/friends`, config);
  return promise;
}
async function getUserByName(name) {
  const config = createHeaders();
  const promise = await axios.get(`${process.env.REACT_APP_API}/users/${name}`);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getCityEvents,
  updateCity,
  getUser,
  getUserById,
  getCategories,
  postEvent,
  getUserEvents,
  getIfJoined,
  postJoinGroup,
  deleteJoinGroup,
  getGroups,
  getUserGroups,
  getRequests,
  getRequest,
  requestAccepted,
  getFriendsEvents,
  getUserByName,
};