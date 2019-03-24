import React from 'react'
import PropTypes from 'prop-types'
import ProductPage from '../components/ProductPage'
import styled from 'styled-components'

const description =
  'Turpis scelerisque suspendisse euismod magnis. Mauris facilisis laoreet lectus lacus vestibulum lobortis nascetur nisi sed sapien class habitasse netus ad viverra auctor sed scelerisque molestie. Semper porta maecenas eu auctor congue curabitur cubilia sociis, aliquet ullamcorper dis natoque leo.'

const rand = () => Math.floor(Math.random() * 9999) + 1

const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`

const ProductThree = ({ className, addToCart }) => {
  return (
    <div className={className}>
      <ProductPage
        title="Product Three"
        description={description}
        image={randomImage}
        addToCart={addToCart}
      />
    </div>
  )
}

ProductThree.propTypes = {
  className: PropTypes.string
}

const StyledProductThree = styled(ProductThree)`
  background: ${props => props.theme.colors.contentBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin: 20px auto;
  max-width: ${props => props.theme.maxContainerWidth};
  position: relative;
`

StyledProductThree.displayName = 'ProductThree'

export default StyledProductThree
