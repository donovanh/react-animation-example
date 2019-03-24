import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../../cart-context'
import CartButton from '../CartButton'

const Navigation = ({ className }) => {
  const { total } = useContext(CartContext)
  return (
    <div className={className}>
      <ul className="nav">
        <NavLink exact className="nav-link" to="/">
          Product One
        </NavLink>
        <NavLink className="nav-link" to="/second">
          Product Two
        </NavLink>
        <NavLink className="nav-link" to="/third">
          Product Three
        </NavLink>
      </ul>
      <div className="nav-cart-button">
        <CartButton total={total} />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  className: PropTypes.string
}

const StyledNavigation = styled(Navigation)`
  background: ${props => props.theme.colors.contentBackground};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 20px auto;
  max-width: ${props => props.theme.maxContainerWidth};
  position: relative;

  .nav-link {
    color: ${props => props.theme.colors.black};
    margin: 0 20px 0 0;
    position: relative;
    transition: color 0.2s ease-out;

    &:hover {
      text-decoration: none;
    }

    &.active {
      font-weight: bold;
    }
  }

  .nav-cart-button {
    padding: 10px 0;
  }
`

StyledNavigation.propTypes = {
  ...Navigation.propTypes
}

StyledNavigation.displayName = 'Navigation'

export default StyledNavigation
