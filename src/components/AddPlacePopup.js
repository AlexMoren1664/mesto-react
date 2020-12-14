import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function AddPlacePopup(props) {
  const inputTitleRef = useRef();
  const inputLinkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: inputTitleRef.current.value,
      link: inputLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="add"
      title="Новое место"
      children={
        <>
          <input
            id="title-input"
            name="name"
            type="text"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            ref={inputTitleRef}
            required
            minLength={1}
            maxLength={30}
            autoComplete="off"
          />
          <span className="popup__error " id="name-error" />
          <input
            id="link-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            ref={inputLinkRef}
            required
            autoComplete="off"
          />
          <span className="popup__error" id="link-error" />
        </>
      }
    />
  );
}
export default AddPlacePopup;
