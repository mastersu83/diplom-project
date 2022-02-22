const initialState = {
  posts: [],
  fullPost: {},
  totalPosts: 0,
  pageSize: 5,
  currentPage: 1,
  currentPostId: null,
  editedPost: {},
  editOrCreateFlag: null,
};

export const posts_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload.items,
        totalPosts: action.payload.total,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "GET_CURRENT_POST_ID":
      return {
        ...state,
        currentPostId: action.payload,
      };
    case "GET_EDITED_POST":
      return {
        ...state,
        editedPost: action.payload,
      };
    case "GET_FULL_POST":
      return { ...state, fullPost: action.payload };
    case "EDIT_OR_CREATE_FLAG":
      return { ...state, editOrCreateFlag: action.payload };
    default:
      return state;
  }
};
