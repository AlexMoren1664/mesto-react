import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(props) {
    setSelectedCard({
      src: props.src,
      name: props.name,
    });
    console.log("handleCardClick");
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // const aaa = document.querySelector('.popup_type_add')
    //  aaa.classList.add("popup_open")
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <Footer />
        </div>
      </div>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
        children={
          <>
            <input
              name="name"
              type="text"
              className="popup__input popup__input_type_name"
              defaultValue="Жaк-Ив Кусто"
              required
              minLength={2}
              maxLength={40}
              autoComplete="off"
            />
            <span className="popup__error" id="name-error" />
            <input
              name="about"
              type="text"
              className="popup__input popup__input_type_job"
              defaultValue="Исследователь океана"
              required
              minLength={2}
              maxLength={40}
              autoComplete="off"
            />
            <span className="popup__error" id="about-error" />
          </>
        }
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <input
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_avatar"
              defaultValue
              required
              autoComplete="off"
            />
            <span className="popup__error" id="link-error" />
          </>
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add"
        title="Новое место"
        children={
          <>
            <input
              name="name"
              type="text"
              placeholder="Название"
              className="popup__input popup__input_type_title"
              defaultValue
              required
              minLength={1}
              maxLength={30}
              autoComplete="off"
            />
            <span className="popup__error " id="name-error" />
            <input
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link"
              defaultValue
              required
              autoComplete="off"
            />
            <span className="popup__error" id="link-error" />
          </>
        }
      />
      <PopupWithForm />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      {/* <div className="popup popup_type_edit">
                <form action="#" className="popup__form popup__form_type_edit" name="form-profile" method="POST" noValidate>
                <button type="button" className="popup__close popup__close_type_profile" />
                <h2 className="popup__title">Редактировать профиль</h2>
                <input name="name" type="text" className="popup__input popup__input_type_name" defaultValue="Жaк-Ив Кусто" required minLength={2} maxLength={40} autoComplete="off" />
                <span className="popup__error" id="name-error" />
                <input name="about" type="text" className="popup__input popup__input_type_job" defaultValue="Исследователь океана" required minLength={2} maxLength={40} autoComplete="off" />
                <span className="popup__error" id="about-error" />
                <button type="submit" className="popup__button popup__button_type_profile" disabled>Сохранить</button>
                </form>
            </div> 
            <div className="popup popup_type_add">
                <form action="#" className="popup__form popup__form_type_add" name="form-card" method="POST" noValidate>
                <button type="button" className="popup__close popup__close_type_card" />
                <h2 className="popup__title">Новое место</h2>
                <input name="name" type="text" placeholder="Название" className="popup__input popup__input_type_title" defaultValue required minLength={1} maxLength={30} autoComplete="off" />
                <span className="popup__error " id="name-error" />
                <input name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" defaultValue required autoComplete="off" />
                <span className="popup__error" id="link-error" />
                <button type="submit" className="popup__button popup__button_type_card" disabled>Создать</button>
                </form>
            </div>
            <div className="popup popup_type_img">
                <div className="popup__content">
                <button type="button" className="popup__close popup__close_type_img" />
                <figure>
                    <img className="popup__img" src="#" alt="#" />
                    <figcaption className="popup__img-title" />
                </figure>
                </div>
            </div>
            <div className="popup popup_type_avatar">
                <form action="#" className="popup__form popup__form_type_avatar" name="form-avatar" method="POST" noValidate>
                <button type="button" className="popup__close popup__close_type_avatar" />
                <h2 className="popup__title">Обновить аватар</h2>
                <input name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" defaultValue required autoComplete="off" />
                <span className="popup__error" id="link-error" />
                <button type="submit" className="popup__button popup__button_type_avatar" disabled>Сохранить</button>
                </form>
            </div>
            <div className="popup popup_type_deleting">
                <form action="#" className="popup__form popup__form_type_deleting" name="form-deleting">
                <button type="button" className="popup__close popup__close_type_deleting" />
                <h2 className="popup__title popup__title_type_deleting">Вы уверены?</h2>
                <button type="submit" className="popup__button">Да</button>
                </form>
            </div>
            <div className="profile__info">
                <div className="profile__container">
                <h2 className="profile__name" />
                <button type="button" className=" profile__edit-button">
                </button>
                </div>
                <h3 className="profile__job" />
            </div>
            <button type="button" className=" profile__add-button">
            </button> */}
      {/* <section className="cards">
                <ul className="card"> */}
      {/*<li class="card__grid">
                                <img src="./images/kirill-pershin-1088404-unsplash.png" alt="крепость" class="card__img">
                                    <div class="card__item">
                                    <h3 class="card__heading">Карачаевск</h3>
                                    <button type="button" class="card__like"></button>
                                </div>
                            </li>*/}
      {/* </ul>
            </section> */}
    </>
  );
}

export default App;
