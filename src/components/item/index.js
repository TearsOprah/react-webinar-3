import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props){

  const handleAddToCart = () => {
    // ищем товар с тем же кодом
    const existingItem = props.cartItems.find(item => item.code === props.item.code);

    // если товар уже существует, то увеличим кол-во на 1
    if (existingItem) {
      existingItem.count++;
      props.setCartItems([...props.cartItems]);
    } else {
      // иначе создаем новый с кол-вом 1
      const newItem = {
        code: props.item.code,
        title: props.item.title,
        count: 1,
        price: props.item.price
      };
      props.setCartItems([...props.cartItems, newItem]);
    }
  };

  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{`${props.item.price.toLocaleString()} ₽`}</div>
      <div className='Item-actions'>
        <button onClick={handleAddToCart}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  }).isRequired,
};

export default React.memo(Item);
