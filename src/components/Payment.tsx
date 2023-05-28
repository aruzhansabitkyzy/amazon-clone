import React from 'react';
import {useAppSelector} from '../app/hooks';

export const Payment =() => {
      const user = useAppSelector((state) => state.user)
      const basket = useAppSelector((state) => state.basket.basket)

      return (
        <div className='payment'>
            <div className='payment__container'>
               <div className='payment__section'>
                    <div className='payment__title'>
                         <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user.currentUser}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
               </div>
               <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        
                    </div>
               </div>
               <div className='payment__section'>

               </div>
            </div>
        </div>
      )
}