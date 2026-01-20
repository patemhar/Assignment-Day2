import type { productInt } from '../constants/products'

export default function Card(product:productInt) {
  return (
    <div className='max-w-xs bg-white border rounded-lg mex-h-100 border-gray-200 shadow hover:shadow-lg transition-shadow duration-300'>
        {product.image && (
            <img
                className='rounded-t-lg h-45 object-cover'
                src={product.image}
                alt={product.title}
            />
        )}

        <div className='p-4'>
            <h2>{product.title}</h2>
            <p>{product.description ? product.description : "No Data"}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
