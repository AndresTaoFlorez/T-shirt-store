import Layout from "../../Components/Layout";
import { useContext, useEffect } from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router";
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

const MyOrder = () => {
  const { order: orders } = useContext(ShoppingCartContext);
  const productId = location.pathname.split('/').pop().trim().toLowerCase(); // Clean and format
  const productIndex = () => {
    if (productId === 'last') {
      return orders?.length - 1;
    } else {
      const index = orders?.findIndex((order) => String(order.id) === productId); // Find the index by productId
      return (index === -1) ? null : index
    }
  };

  return (<Layout>
    <div className="flex mb-6 relative items-center w-80 justify-center">
      <Link to='/my-orders' className="absolute left-0">
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
      </Link>
      <h1>My Orders</h1>
    </div>
    <span className='flex flex-col flex-1 w-80'>
      {
        orders?.[productIndex()]?.products?.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))
      }
    </span>
  </Layout>);
}

export default MyOrder;