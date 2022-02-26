import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDate } from "../utils/dateFormater";

const OpenedMenu = ({ toggleMenu, menuToggle, toggleLoginPopup }) => {
  const auth = useSelector((state) => state.auth);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    if (
      e.target.closest(".menu__link, .close__menu") &&
      !e.target.closest(".login")
    ) {
      menuToggle(true);
    } else {
      menuToggle(false);
    }
  };

  const onActiveLink = () => {
    setActive(!active);
  };

  const openLoginPopup = () => {
    toggleLoginPopup();
    menuToggle(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <div className={`menu open ${toggleMenu ? "" : "hide__menu"}`}>
        {auth.isAuth ? (
          <div className="menu__top">
            <div className="close__button">Закрыть</div>
            <div className="menu__name">{auth.user.fullName}</div>
            <div className="menu__date">
              Дата регистрации: {getDate(auth.user.createdAt)}
            </div>
            <div className="menu__navbar">
              <Link
                to="/"
                className={`menu__link ${active ? "active__menuLink" : ""}`}
              >
                <span onClick={onActiveLink}>Главная</span>
              </Link>
              <Link
                to="/profile/posts"
                className={`menu__link ${active ? "active__menuLink" : ""}`}
              >
                <span onClick={onActiveLink}>Мой профиль</span>
              </Link>
              <Link
                to="/create-post"
                className={`menu__link ${active ? "active__menuLink" : ""}`}
              >
                <span onClick={onActiveLink}>Создать запись</span>
              </Link>
              <Link to="/" className="menu__link">
                Выйти
              </Link>
            </div>
          </div>
        ) : (
          <div className="menu__top">
            <div className="close__button">Закрыть</div>
            <div className="menu__navbar">
              <Link to="/" className="menu__link active__menuLink">
                Главная
              </Link>
              <div onClick={openLoginPopup} className="menu__link login">
                Войти
              </div>
            </div>
          </div>
        )}

        <div className="menu__footer">МЕНЮ</div>
        {/*<div className="overlay" onClick={menuToggle} />*/}
      </div>
    </div>
  );
};

export default OpenedMenu;
