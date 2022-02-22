import React from "react";
import view from "../assets/img/view.svg";
import Header from "./Header";

const Profile = ({ toggleLoginPopup }) => {
  return (
    <div className="profile">
      <Header toggleLoginPopup={toggleLoginPopup} />
      <div className="posts">
        <div className="profile__name">Вася Пупкин</div>
        <div className="profile__dateRegister">
          Дата регистрации: <span>12 августа 2019 в 08:06</span>
        </div>
        <div className="profile__buttons">
          <button className="profile__btn active">Статьи</button>
          <button className="profile__btn">Комментарии</button>
        </div>
        <div className="posts__list">
          <div className="posts__item">
            <div className="posts__itemPost">
              <div className="posts__itemTitle">
                Какой-то очень интересный заголовок
              </div>
              <div className="posts__itemText">
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа.
              </div>
              <div className="posts__itemDate">
                <div className="posts__date">12 августа 2019 в 08:06</div>
                <div className="posts__view">
                  <img src={view} alt="" className="posts__viewIcon" />
                  <span className="posts__viewCount">301</span>
                </div>
              </div>
            </div>
            <img
              src="../assets/img/post-img.jpg"
              alt=""
              className="posts__itemImg"
            />
          </div>
          <div className="posts__item">
            <div className="posts__itemPost">
              <div className="posts__itemTitle">
                JavaScript: Как с помощью Dadata определить город по IP?
              </div>
              <div className="posts__itemText">
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className="posts__itemDate">
                <div className="posts__date">12 августа 2019 в 08:06</div>
                <div className="posts__view">
                  <img
                    src="../assets/img/view.svg"
                    alt=""
                    className="posts__viewIcon"
                  />
                  <span className="posts__viewCount">301</span>
                </div>
              </div>
            </div>
          </div>
          <div className="posts__item">
            <div className="posts__itemPost">
              <div className="posts__itemTitle">
                Какой-то очень интересный заголовок
              </div>
              <div className="posts__itemText">
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа.
              </div>
              <div className="posts__itemDate">
                <div className="posts__date">12 августа 2019 в 08:06</div>
                <div className="posts__view">
                  <img
                    src="../assets/img/view.svg"
                    alt=""
                    className="posts__viewIcon"
                  />
                  <span className="posts__viewCount">301</span>
                </div>
              </div>
            </div>
            <img
              src="../assets/img/post-img.jpg"
              alt=""
              className="posts__itemImg"
            />
          </div>
          <div className="posts__item">
            <div className="posts__itemPost">
              <div className="posts__itemTitle">
                Какой-то очень интересный заголовок
              </div>
              <div className="posts__itemText">
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className="posts__itemDate">
                <div className="posts__date">12 августа 2019 в 08:06</div>
                <div className="posts__view">
                  <img
                    src="../assets/img/view.svg"
                    alt=""
                    className="posts__viewIcon"
                  />
                  <span className="posts__viewCount">301</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
