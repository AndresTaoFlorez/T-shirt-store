/**
 * 
 * This function calculates the total price of all products in the given array
 * @param {Array} elements 
 * @returns {number} Total price of all products
 */
const totalPrice = (elements) => {
  const total = elements.reduce((accumulator, product) => {
    return accumulator + product.price
  }, 0)
  return total
}


export { totalPrice }