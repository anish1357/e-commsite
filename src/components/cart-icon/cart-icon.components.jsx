import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect } from 'react-redux'
import "./cart-icon.styles.scss";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount} </span>
    </div>
);

const mapStateToProps =createStructuredSelector({
  itemCount :selectCartItemsCount
});

// const mapStateToProps =({ cart: {cartItems} })=>({
//     itemCount :cartItems.reduce((accumulatedQuantity,cartItem)=> accumulatedQuantity+cartItem.quantity,0)
// });

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:() =>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);