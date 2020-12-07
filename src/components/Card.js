function Card({src, name, like, onCardClick}) {
    function handleClick() {
      onCardClick({
        src: src,
        name: name,
      });
    }
  
    return (
      <li className="card__grid">
        <img
          src={src}
          alt={name}
          className="card__img"
          onClick={handleClick}
        />
        <button type="button" className="card__delete" />
        <div className="card__item">
          <h3 className="card__heading">{name}</h3>
          <div className="card__like-container">
            <button type="button" className="card__like" />
            <div className="card__counter">{like}</div>
          </div>
        </div>
      </li>
    );
  }
  export default Card;
  