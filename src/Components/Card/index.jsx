import { useContext } from "react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { CheckIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

const Card = (item) => {
  const { price, images, title, category } = item.data
  const { handleAddToCart, handleShowDetail, shoppingCart } = useContext(ShoppingCartContext)

  const RenderIcon = () => {
    const isInCart = shoppingCart.some((product) => product.id === item.data.id)
    return (
      <span
        className="absolute top-0 right-0 rounded-full w-6 h-6 m-2 items-center justify-center overflow-hidden select-none"
        onClick={(event) => handleAddToCart(event, item.data)}
      >
        {isInCart
          ? <CheckIcon className="p-1 bg-black/90 text-white" />
          : <PlusIcon className=" p-1 bg-white/90 text-black" />
        }
      </span>
    )
  }

  return (
    <div
      className="flex flex-col justify-self-center bg-white cursor-pointer w-56 xl:w-auto 2xl:w-auto h-60 rounded-lg"
      onClick={(event) => handleShowDetail(event, item.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 m-2 py-1 px-2.5 bg-white/90 rounded-lg text-black text-xs">
          {category.name}
        </span> {/* Categorý*/}
        <img className="w-full h-full object-cover rounded-lg" src={images} alt={title} />
        <RenderIcon />
      </figure>

      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">$ {price}</span>
      </p>
    </div>
  );
}

export default Card;