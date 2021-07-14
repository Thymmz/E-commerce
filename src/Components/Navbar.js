import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Navbar extends Component{

   render(){
      return(
         <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
               <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav ml-auto align-items-center">
               <li className="nav-item">
                  <Link to="/" className="nav-link">
                     Products
                  </Link>
               </li>
            </ul>
            <Link to="/cart" className="ml-auto">
               <ButtonContainer>
                  <span className="mr-2">
                   <i class="fas fa-cart-plus"></i>
                  </span>
                  My Cart
               </ButtonContainer>
            </Link>
         </NavWrapper>
      );
   }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
   color:var(--mainWhite)!important;
   font-size:1.3rem;
}
`
