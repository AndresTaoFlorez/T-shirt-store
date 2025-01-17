import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './styles.css'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)

  return isProductDetailOpen && (
    <aside className={`flex flex-col product-detail fixed top-0 overflow-scroll overflow-x-hidden right-0 border border-black rounded-lg bg-white`}>
      <div className="flex flex-col justify-between items-center p-6">
        <span className='flex justify-between w-full pb-4'>
          <h2 className="font-medium text-xl">Detail</h2>
          <div>
            <XMarkIcon
              className="h-6 w-6 text-black cursor-pointer"
              onClick={() => closeProductDetail()}
            />
          </div>
        </span>
        <span key={productToShow.id} className='flex flex-col w-full my-2 pb-1 rounded-lg'>
          <img src={productToShow.images} alt={productToShow.title} className='w-full h-72 min-h-72 rounded-lg object-cover' />
          <span className='text-xl font-bold pt-4 pb-2'><p>${productToShow.price}</p></span>
          <h2 className='text text-base font-medium'>{productToShow.title}</h2>
          <p className='text text-sm text-gray-800 h-24 min-h-24 overflow-auto scrollbar-hide'>
            {productToShow.description}
          </p>
        </span>
      </div>
    </aside>
  );
}

export default ProductDetail;