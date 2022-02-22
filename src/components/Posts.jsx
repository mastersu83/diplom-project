import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import Header from "./Header";
import Preloader from "./popupPattern/Preloader";
import Post from "./Post";
import { Pagination } from "antd";
import { getAllPostsThunk } from "../redux/actions/posts_action";

let postId = localStorage.getItem("postId");

const Posts = ({ toggleLoginPopup }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);
  const [activePost, setActivePost] = useState("");

  const handleActivePost = (id) => {
    setActivePost(id);
  };

  let post = posts.posts.map((p) => (
    <Post
      posts={posts.posts}
      auth={auth}
      key={p._id}
      id={p._id}
      authId={auth.id}
      user={p.user}
      title={p.title}
      description={p.description}
      date={p.createdAt}
      views={p.views}
      image={p.photoUrl}
      handleActivePost={handleActivePost}
      activePost={activePost}
    />
  ));
  console.log(posts);
  const onPageChanged = (currentPage) => {
    dispatch(
      getAllPostsThunk(currentPage, posts.pageSize, posts.currentPostId)
    );
  };

  useEffect(() => {
    dispatch(
      getAllPostsThunk(
        posts.currentPage,
        posts.pageSize,
        !postId ? posts.currentPostId : postId
      )
    );
    console.log(postId);
    setActivePost(postId);
  }, []);

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
