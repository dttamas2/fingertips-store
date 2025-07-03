import { useCartContext } from '../lib/context/CartContext';
import Cart from './Cart';

const Header = () => {
  const { cartItems, totalItems, totalPrice, isCartOpen, toggleCart, clearCart } = useCartContext();

  return (
    <header className="bg-slate-700 text-white p-4 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold">Fingertips Store</h1>
        </div>
        
        <div className="absolute right-4">
          <Cart 
            cartItems={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
            isOpen={isCartOpen}
            onToggle={toggleCart}
            onClearCart={clearCart}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;