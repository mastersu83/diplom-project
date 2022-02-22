import Posts from "./components/Posts";
import About from "./components/About";
import ClosedMenu from "./components/ClosedMenu";
import { Redirect, Route, Switch } from "react-router-dom";
import FullPost from "./components/FullPost";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import React, { useEffect, useState } from "react";
import { withAuthRedirect } from "./hoc/withAuthRedirect";
import Popup from "./components/popup/Popup";
import OpenedMenu from "./components/OpenedMenu";
import { authMeThunk } from "./redux/actions/auth_action";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/popupPattern/Preloader";
import { getAllPostsThunk } from "./redux/actions/posts_action";
import "antd/dist/antd.css";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [popupLogin, setPopupLogin] = React.useState(false);

  const toggleLoginPopup = () => {
    setPopupLogin(!popupLogin);
  };

  const menuToggle = (e) => {
    setToggleMenu(e);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authMeThunk());
    }
  }, []);

  return (
    <div className="root">
      <div className={`main ${toggleMenu ? "main__move" : ""}`}>
        <Route exact path="/posts/:id">
          <FullPost isFetching={auth.isFetching} />
        </Route>
        <Route exact path="/" component={About} />
        <Route
          exact
          path={["/create-post", "/edit-post/" + posts.currentPostId]}
        >
          {auth.isAuth ? (
            <CreatePost
              currentPostId={posts.currentPostId}
              currentPage={posts.currentPage}
              pageSize={posts.pageSize}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Switch>
          <Route exact path="/posts" component={Preloader} />
        </Switch>

        <Switch>
          <Route exact path="/profile">
            {auth.isAuth ? (
              <Profile
                toggleLoginPopup={toggleLoginPopup}
                toggleMenu={toggleMenu}
                menuToggle={menuToggle}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Posts
            toggleLoginPopup={toggleLoginPopup}
            toggleMenu={toggleMenu}
            menuToggle={menuToggle}
          />
        </Switch>
        <ClosedMenu menuToggle={menuToggle} />
        <Popup toggleLoginPopup={toggleLoginPopup} popupLogin={popupLogin} />
        <OpenedMenu
          toggleLoginPopup={toggleLoginPopup}
          toggleMenu={toggleMenu}
          menuToggle={menuToggle}
        />
      </div>
    </div>
  );
};

export default App;
