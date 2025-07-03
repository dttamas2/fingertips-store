import './globals.css'
import { CartProvider } from '../lib/context/CartContext'

export const metadata = {
  title: 'Fingertips Store',
  description: 'Professional communication equipment store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}