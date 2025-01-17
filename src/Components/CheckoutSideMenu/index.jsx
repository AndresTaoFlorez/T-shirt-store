import { useContext } from 'react';
import { Link } from 'react-router';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './styles.css'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
  const { isShoppingCartOpen, handleShoppingCartClose, shoppingCart, handleDelete, handleCheckOut } = useContext(ShoppingCartContext)

  return isShoppingCartOpen && (
    <aside className={`flex flex-col shopping-cart fixed top-0 overflow-scroll overflow-x-hidden right-0 border border-black rounded-lg bg-white`}>
      <div className="flex flex-col h-full justify-between items-center p-6">
        <span className='flex justify-between w-full pb-4'>
          <h2 className="font-medium text-xl">Shopping Cart</h2>
          <div>
            <XMarkIcon
              className="h-6 w-6 text-black cursor-pointer"
              onClick={() => handleShoppingCartClose()}
            />
          </div>
        </span>
        {shoppingCart.length === 0 && <p className='text-center'>No products added yet</p>}
        <span className='flex flex-col flex-1 w-full'>
          {
            shoppingCart.map((product) => (
              <OrderCard key={product.id} product={product} handleDelete={handleDelete} />
            ))
          }
        </span>
        <span className='w-full pb-6 pt-4'>
          <p className='flex justify-between items-center mb-2'>
            <span className='font-light'>Total:</span>
            <span className='flex text-2xl font-medium'>$ {totalPrice(shoppingCart)}</span>
          </p>
          <Link to='/my-orders/last'>
            <button className='bg-black text-white w-full py-2 rounded-md' onClick={() => handleCheckOut()}>
              Checkout
            </button>
          </Link>
        </span>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;