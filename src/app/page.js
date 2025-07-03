'use client';

import Header from '@/components/Header';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat pb-20"
      style={{ backgroundImage: "url('/imgs/bg.png')" }}
    >
      <Header/>
      <ProductList />
    </div>
  );
}