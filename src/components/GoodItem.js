import React from 'react'

export default function GoodItem(props) {
    const { id, name, description, full_background, price, addToBasket } = props;
    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button className='btn' onClick={() => addToBasket({ full_background, id, name, price })}>Buy</button>
                <span className='right' style={{ fontSize: '1.8rem' }}><span>Price: </span>${price} </span>
            </div>

        </div >
    )
}
