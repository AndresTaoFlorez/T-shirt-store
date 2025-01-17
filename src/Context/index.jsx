import { createContext, useState, useEffect } from 'react';
import { totalPrice } from '../utils/index'
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

  // -- Statest -- 
  // -- all items from API
  const [items, setItems] = useState(null)
  // - Shopping Cart
  const [shoppingCart, setShoppingCart] = useState([])
  // - Shopping Cart - Show or Hidden
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  // - Shopping Cart - Counter
  const [counter, setCounter] = useState(0)
  // - Shopping Cart - Order
  const [order, setOrder] = useState([])
  // - Product Detail
  const [productToShow, setProductToShow] = useState({})
  // - Product Detail- Show or Hidden
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)


  // -- Handlers and Fcuntions -- 
  // Product Detail - Load products
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  // Update Counter
  useEffect(() => {
    setCounter(shoppingCart.length)
  }, [shoppingCart])


  // Add product to Shopping Cart - handler
  const handleAddToCart = (event, product) => {
    event.stopPropagation()
    setShoppingCart((prev) => {
      const exists = prev.some((item) => item.id === product.id)
      if (exists) {
        handleDelete(product.id)
        return prev
      } else {
        return [...prev, product]
      }
    })
    handleShoppingCartOpen()
  }

  // Delete product from Shopping Cart
  const handleDelete = (id) => {
    setShoppingCart((prev) => {
      const index = prev.findIndex((item) => item.id === id)
      if (index === -1) return prev
      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
  }
  // Add product to detail and show it
  const handleShowDetail = (event, product) => {
    event.stopPropagation()
    setProductToShow(product)
    openProductDetail()
  }

  // Add order - handler
  const handleCheckOut = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart)
    }
    setOrder((prev) => ([...prev, orderToAdd]))
    setShoppingCart([])
  }


  // Shopping Cart - handlers
  const handleShoppingCartOpen = () => {
    setIsShoppingCartOpen(true)
  }
  const handleShoppingCartClose = () => {
    setIsShoppingCartOpen(false)
    setIsProductDetailOpen(false)
  }
  // Product Detail - handlers
  const openProductDetail = () => {
    setIsProductDetailOpen(true)
    setIsShoppingCartOpen(false)
  }
  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }


  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setCounter,
        counter,
        openProductDetail,
        setIsProductDetailOpen,
        closeProductDetail,
        isProductDetailOpen,
        shoppingCart,
        setShoppingCart,
        handleAddToCart,
        handleShowDetail,
        productToShow,
        handleShoppingCartOpen,
        handleShoppingCartClose,
        isShoppingCartOpen,
        handleDelete,
        handleCheckOut,
        order
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }