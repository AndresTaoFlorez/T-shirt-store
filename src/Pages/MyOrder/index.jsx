import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  return (<Layout>
    <h1>My Order</h1>
    <span className='flex flex-col flex-1 w-80'>
      {
        order?.slice(-1)[0]?.products?.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))
      }
    </span>
  </Layout>);
}

export default MyOrder;