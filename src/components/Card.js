function Card(props) {
    function handleClick() {
      props.onCardClick({
        src: props.src,
        name: props.name,
      });
    }
  
    return (
      <li className="card__grid">
        <img
          src={props.src}
          alt={props.name}
          className="card__img"
          onClick={handleClick}
        />
        <button type="button" className="card__delete" />
        <div className="card__item">
          <h3 className="card__heading">{props.name}</h3>
          <div className="card__like-container">
            <button type="button" className="card__like" />
            <div className="card__counter">{props.like}</div>
          </div>
        </div>
      </li>
    );
  }
  export default Card;
  