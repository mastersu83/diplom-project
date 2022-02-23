import React from "react";
import view from "../assets/img/view.svg";
import { useSelector } from "react-redux";
import Preloader from "./popupPattern/Preloader";

const FullPost = ({ isFetching }) => {
  const fullPost = useSelector((state) => state.posts.fullPost);

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <div className="full__post">
          <div className="full__postTitleBox">
            <img
              className="full__postImage"
              src={`http://localhost:5656` + fullPost.photoUrl}
              alt=""
            />
            <div className="full__postTitleWrapper">
              <div className="full__postDate">
                <div className="full__date">{fullPost.createdAt}</div>
                <div className="full__view">
                  <img src={view} alt="" className="full__viewIcon" />
                  <div className="full__viewCount">{fullPost.views}</div>
                </div>
              </div>
              <div className="full__postTitle">{fullPost.title}</div>
              <div className="full__postDesc">{fullPost.description}</div>
            </div>
          </div>
          <div className="full__postContainer">
            <div className="full__postText">{fullPost.text}</div>
            <div className="full__comments">Комментарии (3)</div>
            <div className="full__postComments">
              <div className="full__postComment">
                <div className="full__postCommentHeader">
                  <div className="full__postCommentName">Vasya Pupkin</div>
                  <div className="full__postCommentDate">
                    12 августа 2019 в 08:06
                  </div>
                </div>
                <div className="full__postCommentText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor adipiscing leo id sed neque, diam nibh.
                </div>
              </div>
              <div className="full__postComment">
                <div className="full__postCommentHeader">
                  <div className="full__postCommentName">Vasya Pupkin</div>
                  <div className="full__postCommentDate">
                    12 августа 2019 в 08:06
                  </div>
                </div>
                <div className="full__postCommentText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor adipiscing leo id sed neque, diam nibh.
                </div>
              </div>
            </div>
            <div className="full__postAddComment">
              <div className="full__addCommentTitle">Добавить комментарий</div>
              <textarea className="full__addCommentInput" />
              <div className="full__addCommentBtn">
                <button className="yellow__button">Отправить</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullPost;
