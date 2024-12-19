// import Stripe from 'stripe';

import stripe from '@src/lib/stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-11-20.acacia',
// });

export async function POST(req: any) {
  try {
    const events = await req.json();
    // Creating Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: events?.map((data: any) => ({
        price_data: {
          currency: 'gbp',
          product_data: {
            name: data?.name,
            // images: [data?.image],
          },
          unit_amount: data?.price * 100,
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/payment-cancel`,
      // cancel_url: `${process.env.LOCAL_URL}payment-cancel`,
    });
    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
