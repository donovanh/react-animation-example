import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyle'
import theme from './theme'
import { CartContext } from './cart-context'
import { Navigation } from './components'
import ProductOne from './views/ProductOne'
import ProductTwo from './views/ProductTwo'
import ProductThree from './views/ProductThree'

const App = () => {
  const [total, setCartTotal] = useState(0)
  const addToCart = () => {
    setCartTotal(total + 1)
  }
  const cartState = {
    total,
    addToCart
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cartState}>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path="/" render={props => <ProductOne {...props} />} />
            <Route
              exact
              path="/second"
              render={props => <ProductTwo {...props} />}
            />
            <Route
              exact
              path="/third"
              render={props => <ProductThree {...props} />}
            />
          </Switch>
        </CartContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
