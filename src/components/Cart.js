import { formatPrice } from '../lib/utils';

const Cart = ({ cartItems, totalItems, totalPrice, isOpen, onToggle, onClearCart }) => {
  const handleCheckout = () => {
    onClearCart();
    // rick roll :)
    window.open('https://streamable.com/lf027o', '_blank');
  };

  return (
    <div className="relative">
      <div className="relative">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors cursor-pointer"
        >
          <div className="relative">
            <img src="/imgs/cart.svg" alt="Cart" className="w-8 h-8" />
           {totalItems > 0 && (
              <span className="absolute -bottom-1 -left-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none">
                {totalItems}
              </span>
            )}
          </div>
          <span>Shopping Cart</span>
        </button>
      </div>

      {isOpen && totalItems > 0 && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-96 z-50">
          <div className="mb-4 pb-3 border-b border-gray-200">
            <h3 className="font-semibold text-base text-foreground">
              You have {totalItems} items in your cart!
            </h3>
          </div>
                     
          <div className="flex justify-between items-center text-sm font-bold text-foreground mb-3">
            <span className="flex-1">Items</span>
            <span className="w-16 text-right pr-2">Units</span>
            <span className="w-20 text-right">Price</span>
          </div>
                     
          <div className="space-y-2 mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <span className="flex-1 text-gray-500 pl-2">{item.name}</span>
                <span className="w-16 text-right text-gray-500 pr-2">{item.quantity}</span>
                <span className="w-20 text-right text-gray-500">{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
                     
          <div className="border-t border-gray-200 pt-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-foreground">Total Order Value</span>
              <span className="text-sm font-bold text-foreground">{formatPrice(totalPrice)}</span>
            </div>
          </div>
                     
          <button 
            onClick={handleCheckout}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group/btn"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;