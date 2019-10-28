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
  weight: null,
  weight_goal: null,
  carbs_goal: null,
  calorie_goal: null,
  protein_goal: null,
  fat_goal: null
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
//settings comp
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_AVATAR = 'UPDATE_AVATAR';
const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
const UPDATE_WEIGHT_GOAL = 'UPDATE_WEIGHT_GOAL';
const UPDATE_CARB_GOAL = 'UPDATE_CARB_GOAL';
const UPDATE_CALORIE_GOAL = 'UPDATE_CALORIE_GOAL';
const UPDATE_PROTEIN_GOAL = 'UPDATE_PROTEIN_GOAL';
const UPDATE_FAT_GOAL = 'UPDATE_FAT_GOAL';
const UPDATE_USER_ID = "UPDATE_USER_ID"
//goals
const GET_GOALS = 'GET_GOALS';


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

//settings functions

export function updateUsername(username) {

  return {
    type: UPDATE_USERNAME,
    payload: axios.put("/api/user/username", username)
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: axios.put("/api/user/email", email)
  };
}

export function updateAvatar(avatar) {
  return {
    type: UPDATE_AVATAR,
    payload: axios.put("/api/user/avatar", avatar)
  };
}

export function updateWeight(weight) {
  return {
    type: UPDATE_WEIGHT,
    payload: axios.put("/api/user/weight", weight)
  };
}

export function updatePhoneNumber(phone_number) {
  return {
    type: UPDATE_PHONE_NUMBER,
    payload: axios.put("/api/user/phonenumber", phone_number)
  };
}

export function updateWeightGoal(weight) {
  return {
    type: UPDATE_WEIGHT_GOAL,
    payload: axios.put("/api/goal/weight", weight)
  };
}

export function updateCarbGoal(carbs_goal) {
  return {
    type: UPDATE_CARB_GOAL,
    payload: axios.put("/api/goal/carbs", carbs_goal)
  };
}

export function updateCalorieGoal(calories) {
  return {
    type: UPDATE_CALORIE_GOAL,
    payload: axios.put("/api/goal/calorie", calories)
  };
}

export function updateProteinGoal(protein) {
  return {
    type: UPDATE_PROTEIN_GOAL,
    payload: axios.put("/api/goal/protein", protein)
  };
}

export function updateFatGoal(fat) {
  return {
    type: UPDATE_FAT_GOAL,
    payload: axios.put("/api/goal/fat", fat)
  };
}

export function getGoals(){
  return {
    type: GET_GOALS,
    payload: axios.get('/api/goals')
  }
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;



  switch (type) {
    case UPDATE_USER_ID:
      return {
        user_id: payload
      }
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
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
        user_id: payload.data.user_id,
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
        user_id: payload.data.user_id,
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
    case `${UPDATE_USERNAME}_FULFILLED`:
      return {
        ...state,
        username: payload.data.username
      }
    case `${UPDATE_EMAIL}_FULLFILLED`:
      return {
        ...state,
        email: payload.data.email
      }
    case `${UPDATE_AVATAR}_FULLFILLED`:
      return {
        ...state,
        avatar: payload.data.avatar
      }
    case `${UPDATE_WEIGHT}_FULLFILLED`:
      return {
        ...state,
        weight: payload.data.weight
      }
    case `${UPDATE_PHONE_NUMBER}_FULLFILLED`:
      return {
        ...state,
        phone_number: payload.data.phone_number
      }
    case `${UPDATE_WEIGHT_GOAL}_FULLFILLED`:
      return {
        ...state,
        weight_goal: payload.data.weight_goal
      }
    case `${UPDATE_CARB_GOAL}_FULLFILLED`:
      return {
        ...state,
        carbs_goal: payload.data.carbs_goal
      }
    case `${UPDATE_CALORIE_GOAL}_FULLFILLED`:
      return {
        ...state,
        calorie_goal: payload.data.calorie_goal
      }
    case `${UPDATE_PROTEIN_GOAL}_FULLFILLED`:
      return {
        ...state,
        protein_goal: payload.data.protein_goal
      }
    case `${UPDATE_FAT_GOAL}_FULLFILLED`:
      return {
        ...state,
        fat_goal: payload.data.fat_goal
      }
    case `${GET_GOALS}_FULFILLED`:
      return{
        ...state,
        weight_goal: payload.data[0].weight_goal,
        carbs_goal: payload.data[0].carbs_goal,
        calorie_goal: payload.data[0].calorie_goal,
        protein_goal: payload.data[0].protein_goal,
        fat_goal: payload.data[0].fat_goal
      }
    default:
      return state;
  }
}
