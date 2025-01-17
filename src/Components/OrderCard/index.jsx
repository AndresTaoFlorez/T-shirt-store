import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ product, handleDelete }) => {
  const { id, title, images: imageUrl, price } = product

  const RenderXmarkIcon = () => {
    if (!handleDelete) return null;
    return (
      <XMarkIcon
        className="h-6 w-6 text-black cursor-pointer hover:text-red-500 transition-colors"
        onClick={() => handleDelete(id)}
      />
    );
  };

  return (
    <aside className="flex justify-between gap-2 my-2 items-center">
      <div className="flex items-center">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
      </div>
      <div className="flex items-center gap-2 w-full">
        <p className="text-sm font-light flex-1">{title}</p>
        <p className="text-lg font-medium text-nowrap">$ {price}</p>
        <RenderXmarkIcon />
      </div>
    </aside>
  );
}

export default OrderCard;