import React from 'react';
import {connect }from 'react-redux';
import "./cart-dropdown.styles.scss";
import CustomButton from '../custombutton/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


import {selectCartItems} from '../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'




const  CartDropdown = ({cartItems,history,toggleCartHidden}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
             {     
                 cartItems.length?(
                 cartItems.map(cartItem=>(
                     <CartItem key={cartItem.id} item={cartItem}/>))
                 ):(
                     <span className='empty-message'>Your cart is empty</span>
                 )
             
                    }

            </div> 
            <CustomButton onClick={
                ()=>{history.push('/checkout')
                    toggleCartHidden();  
            } 
                }>
                GO TO CHECKOUT
                </CustomButton>
        </div>
    
);


const mapStateToProps =createStructuredSelector({
cartItems :selectCartItems
});
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:() =>dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));