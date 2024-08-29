import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CartPage = () => {
  // This is a mock cart item. In a real application, you'd fetch this from a state management solution or backend.
  const cartItems = [
    {
      id: 1,
      name: "Custom Tote Bag",
      price: 29.99,
      image: "/placeholder.svg"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                  <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" className="w-full">Remove</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div>
            <Card className="border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;