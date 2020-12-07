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
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(props) {
    setSelectedCard({
      src: props.src,
      name: props.name,
    });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
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
    </>
  );
}

export default App;
