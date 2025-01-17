import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ order }) => {
  const { id, totalPrice, totalProducts } = order;

  return (
    <div className="flex w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
      <div className="flex justify-between items-center w-full space-x-4">
        {/* Order ID */}
        <div className="flex flex-col text-gray-600 font-semibold text-lg flex-1">
          <span>Order ID:</span>
          <span className="block text-sm text-gray-500 truncate">{id}</span>
        </div>

        {/* Total Products */}
        <div className="flex flex-col text-center flex-1">
          <span className="text-sm text-gray-500">Total Products </span>
          <span className="font-semibold text-gray-800">{totalProducts}</span>
        </div>

        {/* Total Price */}
        <div className="flex flex-col text-right flex-1">
          <span className="text-sm text-gray-500">Total Price </span>
          <span className="font-medium text-xl text-indigo-600 overflow-hidden text-ellipsis whitespace-nowrap">
            ${totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
