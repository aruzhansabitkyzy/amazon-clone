import '../style/Header.css';
import {SearchSharp, ShoppingBasketRounded} from '@mui/icons-material'
import {useAppSelector} from '../app/hooks'
import {Link} from 'react-router-dom';

export const Header = () => {
    const basketItems = useAppSelector((state) => state.basket.basket)
    const user = useAppSelector((state) => state.user.user)
    console.log(user.isAuthenticated + "is cur")
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src={require("../img/amazon_PNG11.png")}/></Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <span className='search-button'>
                    <SearchSharp className='header__searchIcon'/>
                </span>
            </div>
            <div className='header__nav'>
                   <Link to='/login'>
                        <div className="header__option">
                            <span className='header__optionLineOne'>
                                Hello, {user.currentUser}
                            </span>
                            <span className='header__optionLineTwo'>
                                {user ? 'Sign out' : 'Sign in'}
                            </span>
                        </div>
                   </Link>
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
                   <Link to='/checkout'>
                    <div className="header__optionBasket">
                            <ShoppingBasketRounded/>
                            <span className="header__optionLineTwo header__basketCount">{basketItems.basketTotalQuantity}</span>
                    </div>
                   </Link>
            </div>
        </div>
    )
}