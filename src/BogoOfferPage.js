import { useState } from "react";

export default function BogoOfferPage() {
  const [selectedBox, setSelectedBox] = useState(1);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const renderOptions = (unitCount) => {
    return Array.from({ length: unitCount }, (_, i) => (
      <div key={i} className="flex gap-2 mb-2">
        <select className="border rounded p-1 w-1/2">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <select className="border rounded p-1 w-1/2">
          <option>Black</option>
          <option>White</option>
          <option>Red</option>
          <option>Blue</option>
        </select>
      </div>
    ));
  };

  const offers = [
    { id: 1, units: 1, discount: "10% Off", price: 10 },
    { id: 2, units: 2, discount: "20% Off", price: 18 },
    { id: 3, units: 3, discount: "30% Off", price: 24 },
  ];

  return (
    <div className="max-w-md mx-auto p-4 font-sans text-sm sm:text-base">
      <h2 className="text-pink-500 font-bold text-center text-xl mb-4">
        YAY! It’s BOGO
      </h2>

      {offers.map((offer) => (
        <div
          key={offer.id}
          className={`border-2 p-4 mb-3 rounded cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
            selectedBox === offer.id
              ? "border-pink-500 bg-pink-50 max-h-[400px]"
              : "border-gray-300 max-h-[80px]"
          }`}
          onClick={() => handleBoxClick(offer.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="offer"
                checked={selectedBox === offer.id}
                onChange={() => handleBoxClick(offer.id)}
              />
              <span>
                {offer.units} Unit{offer.units > 1 ? "s" : ""}
              </span>
              <span className="bg-pink-200 text-pink-800 px-2 rounded text-xs">
                {offer.discount}
              </span>
            </div>
            <div className="text-right">
              <div className="font-bold">${offer.price.toFixed(2)} USD</div>
              <div className="line-through text-gray-400 text-xs">
                ${(offer.units * 12).toFixed(2)} USD
              </div>
            </div>
          </div>
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              selectedBox === offer.id
                ? "opacity-100 mt-4"
                : "opacity-0 h-0 mt-0"
            }`}
          >
            {selectedBox === offer.id && renderOptions(offer.units)}
          </div>
        </div>
      ))}

      <div className="text-pink-500 mb-2">Free Delivery</div>
      <div className="font-semibold mb-4">
        Total: ${offers[selectedBox - 1].price.toFixed(2)} USD
      </div>

      <button className="w-full bg-pink-500 text-white py-2 rounded font-bold">
        + Add to Cart
      </button>

      <p className="text-gray-400 text-xs text-center mt-2">
        @ Powered by Pumper
      </p>
    </div>
  );
}
