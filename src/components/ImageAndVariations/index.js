import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const renderPriceOption = ({ price, name }, setCurrentPrice, currentPrice) => (
  <li key={name}>
    <label
      htmlFor={name}
      onClick={() => setCurrentPrice(price)}
      className={currentPrice === price ? 'current' : ''}
    >
      <input
        defaultChecked={currentPrice === '19.99'}
        type="radio"
        name="prices"
        id={name}
        className="price-radio"
      />
      {name}
    </label>
  </li>
)

const ImageAndVariations = ({
  className,
  image,
  title,
  currentPrice,
  setCurrentPrice
}) => {
  const priceOptions = [
    { price: '9.99', name: 'Small' },
    { price: '19.99', name: 'Medium' },
    { price: '99.99', name: 'Large' }
  ]

  return (
    <div className={className}>
      <div className="image-container">
        <img className="image" src={image} alt={title} />
      </div>
      <ul className="variations">
        {priceOptions.map(option =>
          renderPriceOption(option, setCurrentPrice, currentPrice)
        )}
      </ul>
    </div>
  )
}

ImageAndVariations.propTypes = {
  className: PropTypes.string
}

const StyledImageAndVariations = styled(ImageAndVariations)`
  flex-shrink: 0;
  width: 440px;

  .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .image {
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.2);
    background: #eee;
    height: 400px;
    width: 100%;
  }

  .variations {
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      list-style: none;
      padding: 0;
      text-align: center;
      margin: 0;
      width: 33%;
    }

    .price-radio {
      position: absolute;
      left: -999px;
    }

    label {
      background: #eee;
      border-radius: 5px;
      border: 2px solid #fff;
      cursor: pointer;
      display: block;
      padding: 2px 15px;
      position: relative;
      text-align: center;
      width: 100%;

      &.current {
        background: #ffdc00;
        font-weight: bold;
      }
    }
  }
`

StyledImageAndVariations.displayName = 'ImageAndVariations'

export default StyledImageAndVariations
