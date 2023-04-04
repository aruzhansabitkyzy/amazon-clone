import '../style/Product.css';
import {ProductItem} from  '../interface/ProductItem'
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {action} from '../app/reducer';
import {useState,useEffect} from 'react';
export const Product: React.FC<ProductItem> = ({id,title, rating,image, priceFrom, priceTo, stage}) => {
    const dispatch = useAppDispatch();
    const basketItems = useAppSelector((state) => state.basket.basket) 
    const [buttonText, setButtonText] = useState("Add to Basket");
    useEffect(() => {
        if(basketItems.basketItems.findIndex(item => item.id == id) < 0) {
            setButtonText("Add to Basket");
        }
        else {
            setButtonText("In the Basket");
        }
      }, []);
    const buttonClicked = () => {
        if(buttonText == 'Add to Basket') {
            dispatch(action.addToBasket({id,title, rating, image, priceFrom, priceTo, stage}));
            setButtonText("In the Basket");
        }
        else {
            dispatch(action.removeFromBasket({id,title, rating, image, priceFrom, priceTo, stage}))
            setButtonText("Add to Basket");
        }
    }
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
            {stage == 'main' ? (
               <button onClick = {buttonClicked}>{buttonText}</button>
               ) :              
            (<button onClick = {() => dispatch(action.removeFromBasket({id, title, rating, image, priceFrom, priceTo, stage}))}>Remove from Basket</button>)
            }
        </div>
    )
}