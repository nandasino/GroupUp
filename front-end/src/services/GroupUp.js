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

export {
  postSignIn,
  postSignUp,
};