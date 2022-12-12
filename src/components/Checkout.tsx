import '../style/Checkout.css';
import {Product} from './Product';
import {useAppSelector} from '../app/hooks'
import {ProductItem} from '../interface/ProductItem';

export const Checkout = () => {
    const basketItems = useAppSelector((state) => state.basket)
    return(
        <div className='checkout'>
             <div className="checkout__left">
                 <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                 <div>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                    
                        {basketItems?.basketItems.map(item => (
                            <Product title= {item.title} rating = {item.rating} image= {item.image} priceFrom = {item.priceFrom} priceTo={item.priceTo}/>
                         ))}
                    
                 </div>
             </div>
             <div className="checkout__right">
                <h2>The subtotal will go here {basketItems.basketTotalAmount}</h2>
             </div>
        </div>
    )
}