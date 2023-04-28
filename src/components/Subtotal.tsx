import {useAppSelector} from '../app/hooks';
import '../style/Subtotal.css';
import { useNavigate } from 'react-router-dom';
var CurrencyFormat = require('react-currency-format');


export const Subtotal = () => {
    const basketItems = useAppSelector((state) => state.basket.basket);
    const navigate = useNavigate();
return (
    <div className='subtotal'>
    <CurrencyFormat
        renderText= {(value:string) => (
            <>
            <p>Subtotal ({basketItems.basketTotalQuantity} items): <strong>{value}</strong></p>
            <small className='subtotal__gift'>
                <input type='checkbox'/>
                This order contains a gift
            </small>
            </>
        )}
          value={basketItems.basketTotalAmount}
          decimalScale = {2}
          displayType={"text"}
          thousandSeparator={true}
          prefix= {"€"}
    />
    <button onClick={(e)=> navigate('/payment')}>Proceed to Checkout</button>
    </div>
)
}