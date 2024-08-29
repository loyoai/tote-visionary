import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FEF9C3] p-8">
      <div className="container mx-auto">
        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
            {cartItems.length === 0 ? (
              <p className="text-xl">Your cart is empty.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {cartItems.map((item) => (
                    <Card key={item.id} className="mb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4 border-2 border-black" />
                        <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => removeItem(item.id)} className="w-full bg-[#5FA5F9] hover:bg-[#4A94E8] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          Remove
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div>
                  <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#16A349] hover:bg-[#138A3D] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Proceed to Checkout
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
