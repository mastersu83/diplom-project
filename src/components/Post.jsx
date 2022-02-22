import React, { useState } from "react";
import view from "../assets/img/view.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deletePostThunk,
  editOrCreateFlagAction,
  getEditedPostAction,
  getFullPostAction,
  getPostEditIdAction,
} from "../redux/actions/posts_action";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Post = ({
  title,
  description,
  date,
  views,
  id,
  image,
  handleActivePost,
  activePost,
  user,
  authId,
  posts,
}) => {
  const dispatch = useDispatch();
  const [showEditBlock, setShowEditBlock] = useState(false);
  const [linkUnderline, setLinkUnderline] = useState(false);

  const getFullPost = () => {
    let obj = posts.find((item) => item._id === id);
    dispatch(getFullPostAction(obj));
    localStorage.setItem("postId", id);
    // dispatch(getPostEditIdAction(id));
    handleActivePost(id);
  };

  const deletePost = () => {
    dispatch(deletePostThunk(id));
  };

  const onMouseEnter = () => {
    if (user._id === authId) {
      setShowEditBlock(true);
    }
    setLinkUnderline(true);
  };
  const onMouseLeave = () => {
    setShowEditBlock(false);
    setLinkUnderline(false);
  };

  const editPost = () => {
    localStorage.setItem("postId", id);
    dispatch(editOrCreateFlagAction("edit"));
    dispatch(getPostEditIdAction(id));
    let obj = posts.find((item) => item._id === id);
    dispatch(getEditedPostAction(obj));
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={`posts__item ${activePost === id ? "active-post" : ""}`}>
        <div className="posts__itemPost">
          <div className={`editPostBlock ${showEditBlock ? "show" : ""}`}>
            <Link to={"/edit-post/" + id}>
              <EditOutlined onClick={editPost} className="editButton" />
            </Link>
            <DeleteOutlined onClick={deletePost} className="deleteButton" />
          </div>
          <Link to={"/posts/" + id}>
            <div
              onClick={getFullPost}
              className={`posts__itemTitle ${
                linkUnderline ? "link-underline" : ""
              }`}
            >
              {title}
            </div>
          </Link>

          <div className="posts__itemText">{description}</div>
          <div className="posts__itemDate">
            <div className="posts__date">{date}</div>
            <div className="posts__view">
              <img src={view} alt="" className="posts__viewIcon" />
              <span className="posts__viewCount">{views}</span>
            </div>
          </div>
        </div>
        <img
          src={`http://localhost:5656` + image}
          alt=""
          className="posts__itemImg"
        />
      </div>
    </div>
  );
};

export default Post;
