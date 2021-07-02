<<<<<<< HEAD
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
=======
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";
>>>>>>> parent of eb89913... pushing PART_3

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
=======
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
>>>>>>> parent of eb89913... pushing PART_3
    default:
      return state;
  }
<<<<<<< HEAD
};

=======
}
>>>>>>> parent of eb89913... pushing PART_3
