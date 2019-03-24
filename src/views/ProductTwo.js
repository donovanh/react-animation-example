import React from 'react'
import PropTypes from 'prop-types'
import ProductPage from '../components/ProductPage'
import styled from 'styled-components'

const description =
  'Tortor porttitor taciti nullam potenti pellentesque inceptos faucibus penatibus cum accumsan adipiscing nisl litora. Augue lorem condimentum ipsum elementum phasellus quis quisque in cras mollis. Rhoncus Integer sodales facilisis. Scelerisque facilisis, ac mollis mus magnis Mauris potenti consectetuer pulvinar luctus odio. Hendrerit orci quam sodales vitae auctor mi.'

const rand = () => Math.floor(Math.random() * 9999) + 1

const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`

const ProductTwo = ({ className, addToCart }) => {
  return (
    <div className={className}>
      <ProductPage
        title="Product Two"
        description={description}
        image={randomImage}
        addToCart={addToCart}
      />
    </div>
  )
}

ProductTwo.propTypes = {
  className: PropTypes.string
}

const StyledProductTwo = styled(ProductTwo)`
  background: ${props => props.theme.colors.contentBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin: 20px auto;
  max-width: ${props => props.theme.maxContainerWidth};
  position: relative;
`

StyledProductTwo.displayName = 'ProductTwo'

export default StyledProductTwo
