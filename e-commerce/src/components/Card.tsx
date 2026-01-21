import type { productInt } from '../constants/products'
import clsx from 'clsx';

function renderStockMessage(stock:number) {
  if (stock < 1) return <p className='text-sm text-red-500'>Out Of Stock</p>;
  if (stock < 10) return <p className='text-sm text-yellow-500'>Low Stock</p>;
  return <p className='text-sm'>In Stock</p>;
}

export default function Card(product:productInt) {

  return (
    <div className='max-w-md h-130 bg-white border rounded-lg mex-h-100 border-gray-200 shadow hover:shadow-lg transition-shadow duration-300'>
        <div className='flex justify-center mt-6'>   
            {product.image && (
                <img
                    className='rounded-lg h-45 object-cover'
                    src={product.image}
                    alt={product.title}
                />
            )}
        </div>
        <div className='p-4 h-79 relative flex flex-col flex-1'>
            
            <h2 className='text-xl font-bold mb-2 line-clamp-1'>
                {product.title}
            </h2>
            
            <p className='text-gray-600 mb-2 text-sm line-clamp-3'>
                {product.description ? product.description.substring(0, 150).concat("...") : "No Data"}
            </p>
            
            <p className="font-semibold mb-1">
                ₹{product.price}
            </p>
            
            {product.price > 100 && (
                <p className={clsx('text-amber-400 text-sm border-amber-400 p-1 border w-fit rounded-2xl', product.stock < 0 ? "disabled" : "")}>Premium</p>
            )}
            
            <p className='text-sm my-1'>Stock: {product.stock}</p>
            
            {renderStockMessage(product.stock)}
            
            <button className='p-2 absolute rounded-lg border left-4 bottom-4'>Add to Cart</button>
        </div>
    </div>
  )
}
