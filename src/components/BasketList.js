import React from 'react'
import BasketItems from './BasketItems';

export default function BasketList(props) {
    const { order, incrementQuantity, decrementQuantity } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <div className='bsk'>
            <ul class="collection basket-list">
                <li class="collection-item active">Basket</li>

                {order.length ? order.map(item => {
                    return (
                        <BasketItems
                            key={item.id} {...item}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                            removeFromBasket={props.removeFromBasket} />
                    )
                }) : <li className='collection-item'>Basket is empty</li>}

                <li className="collection-item active">Total price: {totalPrice} <b>$</b></li>
                <i className='material-icons basket-close' onClick={props.handleBasketShow}>close</i>
            </ul>
        </div>
    )
}
