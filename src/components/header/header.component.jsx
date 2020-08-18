import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";



const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>
    <div className="options">

    {currentUser ?(
        <div className='option' onClick={ ()=> auth.signOut()}>SIGN OUT  </div>
      ):(
        <Link className="option" to="/signin">
        SIGN IN
      </Link>
      )}
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <CartIcon/>
        
    
    </div>
    {hidden ? null:
    <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser,hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);
