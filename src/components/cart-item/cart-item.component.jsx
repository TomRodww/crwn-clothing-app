import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <div className='cart-item-container' >
            <img src={imageUrl} alt={`${name}`} />
            <div className='itme-details'>
                <span className='name'> {name}
                </span>

                <br></br>
                
                <span className='price'>{quantity} x ${price} 
                </span>
            </div>
        </div>
    );
};

export default CartItem;