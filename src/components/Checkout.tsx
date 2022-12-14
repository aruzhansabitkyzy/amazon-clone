import '../style/Checkout.css';
import {Product} from './Product';
import {useAppSelector} from '../app/hooks'
import {ProductItem} from '../interface/ProductItem';
import {Subtotal} from './Subtotal';

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
                            <Product id={item.id} title= {item.title} rating = {item.rating} image= {item.image} priceFrom = {item.priceFrom} priceTo={item.priceTo} stage="basket"/>
                         ))}
                    
                 </div>
             </div>
             <div className="checkout__right">
                <Subtotal /> 
             </div>
        </div>
    )
}