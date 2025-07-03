'use client';
import { useState } from 'react';

const Tooltip = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div
        className="cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <img 
          src={isVisible ? "/imgs/tooltip-hover.svg" : "/imgs/tooltip-static.svg"}
          alt="Product info"
          className="w-6 h-6"
        />
      </div>

      {isVisible && (
        <div className="absolute top-8 right-0 bg-yellow-50 border border-yellow-300 rounded-lg p-4 w-96 z-50 shadow-lg">
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0">
              <img 
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="font-bold mb-2">Description</h4>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          </div>
          
          <h4 className="font-bold mb-2">Key Features</h4>
          <div className="space-y-1 text-sm">
            {Object.entries(product.features).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span>{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;