export const initialState = {
  usersList: [],
  loading: false,
  error: null,
  usuario: null,
};

export function usuariosReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, usersList: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_SUCCESS":
      return { ...state, usersList: [...state.usersList, action.payload] };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        usersList: state.usersList.map(u =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        usersList: state.usersList.filter(u => u.id !== action.payload)
      };
    case "GET_BY_ID_SUCCESS":
      return { ...state, usuario: action.payload };
    default:
      return state;
  }
}