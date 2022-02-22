import { postsApi } from "../../api/api";
import { isFetchingAction } from "./auth_action";

export const getAllPostsAction = (post) => ({
  type: "GET_ALL_POSTS",
  payload: post,
});
export const getFullPostAction = (post) => ({
  type: "GET_FULL_POST",
  payload: post,
});
export const setCurrentPageAction = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  payload: currentPage,
});
export const getPostEditIdAction = (id) => ({
  type: "GET_CURRENT_POST_ID",
  payload: id,
});
export const getEditedPostAction = (obj) => ({
  type: "GET_EDITED_POST",
  payload: obj,
});
export const editOrCreateFlagAction = (flag) => ({
  type: "EDIT_OR_CREATE_FLAG",
  payload: flag,
});

export const createPostThunk =
  ({ title, description, file, text }, currentPage, pageSize, id) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file[0]);
      let imgUrl = await postsApi.uploadFile(formData);
      let resp = await postsApi.createPost(title, description, imgUrl, text);
      localStorage.setItem("postId", resp.data._id);
      dispatch(getAllPostsThunk(currentPage, pageSize, resp.data._id));
    } catch (e) {
      console.log(e.message);
    }
  };
export const getAllPostsThunk =
  (currentPage, pageSize, id) => async (dispatch) => {
    try {
      let resp = await postsApi.getAllPosts(currentPage, pageSize);
      dispatch(setCurrentPageAction(currentPage));
      dispatch(getAllPostsAction(resp.data));
      dispatch(getFullPostThunk(id));
    } catch (e) {
      console.log(e.message);
    }
  };
export const getFullPostThunk = (id) => async (dispatch) => {
  try {
    dispatch(isFetchingAction(true));
    let resp = await postsApi.getPost(id);
    dispatch(getPostEditIdAction(resp.data._id));
    dispatch(getFullPostAction(resp.data));
    dispatch(isFetchingAction(false));
  } catch (e) {
    console.log(e.message);
  }
};
export const deletePostThunk = (id) => async (dispatch) => {
  try {
    await postsApi.deletePost(id);
    dispatch(getAllPostsThunk(id));
  } catch (e) {
    console.log(e.message);
  }
};
export const patchPostThunk =
  (data, currentPage, pageSize, id) => async (dispatch) => {
    try {
      let resp = await postsApi.patchPost(data, id);
      dispatch(getAllPostsThunk(currentPage, pageSize, id));
      // dispatch(getPostEditIdAction(currentPage, pageSize, id));
    } catch (e) {
      console.log(e.message);
    }
  };
