import { useContext } from "react";
import { Link } from "react-router";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";


const MyOrders = () => {
  const { order: orders } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1 className="text-ls font-medium py-6">My Orders</h1>
      <div className="flex flex-col gap-2 w-80">
        {
          orders?.map((order, index) => {
            return (
              <Link key={index} to={`/my-orders/${order.id}`}>
                <OrdersCard order={order} />
              </Link>
            )
          })
        }
      </div>
    </Layout>);
}

export default MyOrders;