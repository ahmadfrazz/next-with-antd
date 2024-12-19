'use client';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const products = [
  {
    id: 1,
    name: 'Event One 1',
    price: 10,
    image:
      'https://st2.depositphotos.com/4047415/5852/i/450/depositphotos_58523635-stock-photo-show-interior.jpg',
    quantity: 1,
  },
  { id: 2, name: 'Event Two 2', price: 20, image: 'product2.jpg', quantity: 1 },
];

export default function Checkout() {
  const handleCheckout = async (product: Product) => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout-sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(product),
      body: JSON.stringify([product]),
      // body: JSON.stringify(products),
      // body: JSON.stringify({
      //   cartItems: [product], // setting in array so we can use more than once
      //   returnUrl: window.location.origin,
      // }),
    });
    const { sessionId } = await response.json();
    await stripe?.redirectToCheckout({ sessionId });
  };

  type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-[50%] min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]'>
      <h1>Events</h1>
      <div className='flex gap-10'>
        {products.map((product: Product) => (
          <div className='border p-5' key={product.id}>
            <h2 className='text-[20px]'>{product.name}</h2>
            <p className='text-gray-400 text-[15px]'>Price: £{product.price}</p>
            {/* <p>Quantity: {product.quantity}</p> */}
            <button
              className='border rounded px-2 py-1 mt-5 bg-blue-400 text-white w-full text-[14px]'
              onClick={() => handleCheckout(product)}
            >
              Buy Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
