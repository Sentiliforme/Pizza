//import { createSelector } from 'reselect'
import { State } from '.'
import { createSelector } from 'reselect'
/*
export const getCurrentTurn = (state: State) => 'asd'

export const getTurnType = createSelector([getCurrentTurn, getPlayerId], (turn, pId) => {
  if (turn === pId) return true
  else return false
})
*/
export const getAlert = (state: State) => state.alert
export const getCartProducts = (state: State) => Object.values(state.cart.products)
export const getProducts = (state: State) => state.products

export const getCartValue = createSelector([getCartProducts, getProducts], (cartProducts, products) => {
  return cartProducts.reduce((total, cartProduct) => {
    const amount = cartProduct.amount
    const product = products.find((p) => p.id === cartProduct.productId)
    const { price, promoAmount, promoPrice } = product
    const promos = amount > 0 ? Math.floor(amount / promoAmount) : 0
    const normalPriceProducts = amount - promos * promoAmount
    return total + (normalPriceProducts * price + promos * promoPrice)
  }, 0)
})

export const getCartProduct = (id: number) => (state: State) => state.cart.products[id]

export const getProductAmount = (id: number) =>
  createSelector([getCartProduct(id)], (cartProduct) => cartProduct?.amount || 0)
