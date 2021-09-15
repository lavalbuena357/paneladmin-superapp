import { GET_USER, GET_USERS, AUTH } from "./actions"
const initialState = {
  admins: [],
  user: null,
  all_users: [],
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case AUTH:
      return {...state,
        admins: action.payload
      }
    case GET_USERS:
      return {...state,
        all_users: action.payload
      }
    case GET_USER:
      return {...state,
        user: action.payload
      }
    default:
      return state
  }
}