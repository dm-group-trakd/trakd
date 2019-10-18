import axios from "axios";

//initial state
const initialState = {
  user_id: null,
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  phone_number: 12223334444,
  avatar: "",
  weight: null
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//functions
export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get(`/auth/user`)
  };
}

export function registerUser(newUser) {
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", newUser)
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", user)
  };
}

export function logoutUser() {
  axios.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        username: payload.data.username,
        email: payload.data.email,
        phone_number: payload.data.phone_number,
        avatar: payload.data.avatar,
        weight: payload.data.weight
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        username: payload.data.username,
        email: payload.data.email,
        phone_number: payload.data.phone_number,
        avatar: payload.data.avatar,
        weight: payload.data.weight
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        username: payload.data.username,
        email: payload.data.email,
        phone_number: payload.data.phone_number,
        avatar: payload.data.avatar,
        weight: payload.data.weight
      };
    case LOGOUT_USER:
      return {
        user_id: null,
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone_number: 12223334444,
        avatar: "",
        weight: null
      };
    default:
      return state;
  }
}
