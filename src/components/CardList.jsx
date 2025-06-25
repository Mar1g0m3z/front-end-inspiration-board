import PropTypes from 'prop-types';
import Card from './Card.jsx';
// import './CardList.css';

const CardList = ({ cards, onLike, onDelete }) => {
  const getCardListJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          likes_count={card.likes_count}
          onLike={onLike}
          onDelete={onDelete}
        />
      );
    });
  };
  return <ul>{getCardListJSX(cards)}</ul>;
};


CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default CardList;