const initialState = {
  fullName: null,
  email: null,
  id: null,
  isAuth: false,
  errorText: "",
  isFetching: false,
};

export const auth_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, ...action.payload };
    case "LOGIN":
      return { ...state, ...action.payload };
    case "SET_ERROR_TEXT":
      return { ...state, errorText: action.payload };
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.payload };
    }
    default:
      return state;
  }
};
