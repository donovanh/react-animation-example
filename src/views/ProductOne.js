import React from 'react'
import PropTypes from 'prop-types'
import ProductPage from '../components/ProductPage'
import styled from 'styled-components'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const rand = () => Math.floor(Math.random() * 9999) + 1

const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`

const ProductOne = ({ className, addToCart }) => {
  return (
    <div className={className}>
      <ProductPage
        title="Product One"
        description={description}
        image={randomImage}
        addToCart={addToCart}
      />
    </div>
  )
}

ProductOne.propTypes = {
  className: PropTypes.string
}

const StyledProductOne = styled(ProductOne)`
  background: ${props => props.theme.colors.contentBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin: 20px auto;
  max-width: ${props => props.theme.maxContainerWidth};
  position: relative;
`

StyledProductOne.displayName = 'ProductOne'

export default StyledProductOne
