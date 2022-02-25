import React from "react";
import search from "../assets/img/search.svg";
import { Link, Route, Switch } from "react-router-dom";
import addPost from "../assets/img/addPost.svg";
import logIn from "../assets/img/logIn.svg";
import logOut from "../assets/img/logOut.svg";
import { logOutThunk, setErrorText } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import {
  editOrCreatePostFlagAction,
  getEditedPostAction,
} from "../redux/actions/postsAction";

const Header = ({ toggleLoginPopup }) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const onAddPost = () => {
    dispatch(editOrCreatePostFlagAction("create"));
    dispatch(getEditedPostAction({}));
    if (!isAuth) {
      dispatch(setErrorText("Необходимо войти"));
    }
  };

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className="posts__header">
      <div className="posts__headerTitle">VASYA BLOG</div>
      <div className="posts__headerIcons">
        <img src={search} alt="" className="posts__headerIcon" title="Поиск" />
        <Link to="/create-post">
          <img
            onClick={onAddPost}
            src={addPost}
            alt=""
            className="posts__headerIcon"
            title="Создать статью"
          />
        </Link>

        {!isAuth && (
          <img
            onClick={toggleLoginPopup}
            src={logIn}
            alt=""
            className="posts__headerIcon"
            title="Вход"
          />
        )}

        <Switch>
          {isAuth && (
            <Route>
              <Link to="/">
                <img
                  onClick={onLogOut}
                  src={logOut}
                  alt=""
                  className="posts__headerIcon"
                  title="Выход"
                />
              </Link>
            </Route>
          )}
        </Switch>
      </div>
    </div>
  );
};

export default Header;
