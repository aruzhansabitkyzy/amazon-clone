import { formGroupClasses } from '@mui/material';
import '../style/Product.css';
import {ProductItem} from  '../interface/ProductItem'
import {useAppDispatch} from '../app/hooks';
import { addToBasket } from '../app/reducer';
export const Product: React.FC<ProductItem> = ({title, rating,image, priceFrom, priceTo}) => {
    const dispatch = useAppDispatch();
    return ( 
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{priceFrom}</strong>
                    {priceTo && (
                        <span><small> - $</small><strong>{priceTo}</strong></span>
                    )}
                </p>
                <div className="product__rating">
                    <img src={require("../img/star.png")} width="24px" height="auto"></img>
                    <img src={require("../img/star.png")} width="24px" height="auto"></img>
                    <img src={require("../img/star.png")} width="24px" height="auto"></img>
                    <img src={require("../img/star.png")} width="24px" height="auto"></img>
                    <img src={require("../img/star.png")} width="24px" height="auto"></img>
                </div>
            </div>
            <img src={image} />
            <button onClick = {() => dispatch(addToBasket({title, rating, image, priceFrom, priceTo}))}>Add to Basket</button>
        </div>
    )
}