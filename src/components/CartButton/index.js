import React from 'react'
import CartIcon from '../CartIcon'
import styled from 'styled-components'
import { AnimateOnChange } from 'react-animation'

const showCart = () => {
  console.log('showCart pressed')
}

const CartButton = ({ className, total }) => (
  <button onClick={showCart} className={className}>
    <CartIcon />
    <span className="cart-button-total">{total}</span>
  </button>
)

const buttonBG = '#C0312F'

const StyledCartButton = styled(CartButton)`
  background: ${buttonBG};
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 40px;
  line-height: 44px;
  font-size: 20px;
  position: relative;
  text-align: center;
  width: 50px;

  .cart-button-total {
    background: #fff;
    border: 2px solid ${buttonBG};
    border-radius: 50%;
    color: ${buttonBG};
    font-size: 14px;
    font-weight: bold;
    height: 24px;
    line-height: 20px;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 24px;
  }
`

export default StyledCartButton
