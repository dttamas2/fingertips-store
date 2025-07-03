import { formatPrice } from '../lib/utils';
import Tooltip from './Tooltip';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddClick = () => {
    onAddToCart(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 relative transition-all duration-300 hover:scale-[1.01] group border border-gray-100">
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          -{discountPercentage}%
        </div>
      )}

      <div className="absolute top-4 right-4">
        <Tooltip product={product} />
      </div>

      <div className="mb-6 text-center">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 mb-2 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-32 h-32 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-lg mb-3 text-foreground">
          {product.name}
        </h3>
        
        <div className="mb-6">
          {product.originalPrice && (
            <span className="text-gray-500 line-through mr-2">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-2xl font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
        </div>

        <button
          onClick={handleAddClick}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn"
        >
          <svg 
            className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;