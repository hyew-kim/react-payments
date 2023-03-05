const Card = ({ cardInfo, size = 'small', onClick }) => (
  <>
    <div className="card-box" onClick={onClick} data-number={cardInfo.number}>
      <div className={`${size}-card`} style={{ backgroundColor: cardInfo.backgroundColor }}>
        <div className="card-top">
          <span className={`card-text__${size}`}>{cardInfo.company}</span>
        </div>
        <div className="card-middle">
          <div className={`${size}-card__chip`}></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className={`card-text__${size}`}>{cardInfo.number}</span>
          </div>
          <div className="card-bottom__info">
            <span className={`card-text__${size}`}>{cardInfo.owner}</span>
            <span className={`card-text__${size}`}>{cardInfo.expiry}</span>
          </div>
        </div>
      </div>
    </div>
    {cardInfo.nickname && <span className="card-nickname">{cardInfo.nickname}</span>}
  </>
);

export default Card;
