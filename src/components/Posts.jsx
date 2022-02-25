import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import Header from "./Header";
import Preloader from "./popupPattern/Preloader";
import Post from "./Post";
import { Pagination } from "antd";
import {
  getAllPostsThunk,
  getAllPostsUserThunk,
} from "../redux/actions/postsAction";
import { getAllCommentsUserThunk } from "../redux/actions/commentsAction";

const Posts = ({ toggleLoginPopup }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const [activePost, setActivePost] = useState("");

  const handleActivePost = (id) => {
    setActivePost(id);
  };

  let post = posts.posts.map((p) => (
    <Post
      {...p}
      posts={posts.posts}
      auth={auth}
      key={p._id}
      authId={auth.user._id}
      handleActivePost={handleActivePost}
      activePost={activePost}
    />
  ));

  const onPageChanged = (currentPage) => {
    dispatch(
      getAllPostsThunk(currentPage, posts.pageSize, posts.currentPostId)
    );
  };

  useEffect(() => {
    if (auth.user._id) {
      dispatch(
        getAllPostsThunk(posts.currentPage, posts.pageSize, posts.currentPostId)
      );
      dispatch(
        getAllPostsUserThunk(posts.currentPage, posts.pageSize, auth.user._id)
      );
      dispatch(
        getAllCommentsUserThunk(
          comments.currentPage,
          posts.pageSize,
          auth.user._id
        )
      );
    }
    setActivePost(posts.currentPostId);
  }, [posts.currentPostId, auth.user._id, dispatch]);

  return (
    <div className="posts">
      <Alert errorText={auth.errorText} />
      <Header
        currentPostId={posts.currentPostId}
        toggleLoginPopup={toggleLoginPopup}
      />
      {!posts.posts.length ? (
        <Preloader />
      ) : (
        <>
          <div className="posts__list">{post}</div>
          <div className="posts__pagination">
            <Pagination
              total={posts.totalPosts}
              current={posts.currentPage}
              showQuickJumper
              pageSize={posts.pageSize}
              onChange={onPageChanged}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
