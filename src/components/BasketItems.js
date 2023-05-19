import React from 'react'

export default function BasketItems(props) {
    const { id, full_background, name, price, quantity, incrementQuantity, decrementQuantity } = props;
    return (
        <li className='collection-item basket-img'>
            <span><img src={full_background} alt={name} /> {name} x{quantity} = {price * quantity} <b>$</b></span>


            <span className='secondary-content'>
                <a className=" waves-light " onClick={() => incrementQuantity(id)}><i className="material-icons">exposure_plus_1</i></a>
                <a className=" waves-light " onClick={() => decrementQuantity(id)}><i className="material-icons">exposure_neg_1</i></a>
                <i className='material-icons basket-delete ' onClick={() => props.removeFromBasket(id)}>delete_forever</i>
            </span>
        </li>
    )
}
