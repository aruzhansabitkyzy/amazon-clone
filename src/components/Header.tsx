import '../style/Header.css';
import {SearchSharp, ShoppingBasketRounded} from '@mui/icons-material'
import {useAppSelector} from '../app/hooks'

export const Header = () => {
    const basketItems = useAppSelector((state) => state.basket)
    return (
        <div className='header'>
            <img className='header__logo' src={require("../img/amazon_PNG11.png")}/>
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <span className='search-button'>
                    <SearchSharp className='header__searchIcon'/>
                </span>
            </div>
            <div className='header__nav'>
                   <div className="header__option">
                       <span className='header__optionLineOne'>
                           Hello, Guest
                       </span>
                       <span className='header__optionLineTwo'>
                           Sign in
                       </span>
                   </div>
                   <div className="header__option">
                       <span className='header__optionLineOne'>
                           Returns
                       </span>
                       <span className='header__optionLineTwo'>
                           & Orders
                       </span>
                   </div>
                   <div className="header__option">
                       <span className='header__optionLineOne'>
                           Your
                       </span>
                       <span className='header__optionLineTwo'>
                           Prime
                       </span>
                   </div>
                   <div className="header__optionBasket">
                        <ShoppingBasketRounded/>
                        <span className="header__optionLineTwo header__basketCount">{basketItems.basketTotalQuantity}</span>
                   </div>
            </div>
        </div>
    )
}