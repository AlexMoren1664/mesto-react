import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([info, card]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src={userAvatar} alt="Кусто" className="profile__img" />
          <div className="profile__cover">
            <button
              type="button"
              className="profile__button"
              onClick={props.onEditAvatar}
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h2 className="profile__name">{userName}</h2>
            <button
              type="button"
              className=" profile__edit-button"
              onClick={props.onEditProfile}
            />
          </div>
          <h3 className="profile__job">{userDescription}</h3>
        </div>
        <button
          type="button"
          className=" profile__add-button"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="cards">
        <ul className="card">
          {cards.map((data) => {
            return (
              <Card
                like={data.likes.length}
                name={data.name}
                src={data.link}
                key={data._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
