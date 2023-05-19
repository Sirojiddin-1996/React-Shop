import React from 'react'

export default function Card(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className='cart indigo darken-4 red-text text-lighten-3' onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className='card-quantity'>{quantity}</span> : null}
        </div>
    )
}
