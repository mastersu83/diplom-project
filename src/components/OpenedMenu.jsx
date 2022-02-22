import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OpenedMenu = ({ toggleMenu, menuToggle, toggleLoginPopup }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

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
        {isAuth ? (
          <div className="menu__top">
            <div className="close__button">Закрыть</div>
            <div className="menu__name">Вася Пупкин</div>
            <div className="menu__date">
              Дата регистрации: 12 августа 2019 в 08:06
            </div>
            <div className="menu__navbar">
              <Link to="/" className="menu__link active__menuLink">
                Главная
              </Link>
              <Link to="/profile" className="menu__link">
                Мой профиль
              </Link>
              <Link to="/create-post" className="menu__link">
                Создать запись
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
