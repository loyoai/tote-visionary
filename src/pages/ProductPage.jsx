import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingBag, Recycle, Truck } from 'lucide-react';

const ProductPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({
      id: Date.now(),
      name: "Custom Tote Bag",
      price: 29.99,
      image: uploadedImage || "/placeholder.svg"
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    toast({
      title: "Added to cart",
      description: "Your customized tote bag has been added to the cart.",
    });
    setShowPreview(false);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#FEF9C3] p-4 md:p-8">
      <div className="container mx-auto">
        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-8 border-black p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem><img src="/placeholder.svg" alt="Tote Bag 1" className="w-full h-auto" /></CarouselItem>
                    <CarouselItem><img src="/placeholder.svg" alt="Tote Bag 2" className="w-full h-auto" /></CarouselItem>
                    <CarouselItem><img src="/placeholder.svg" alt="Tote Bag 3" className="w-full h-auto" /></CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">Custom Tote Bag</h1>
                <p className="text-xl mb-4">$29.99</p>
                <p className="mb-4">Express your unique style with our customizable tote bag. Perfect for everyday use, shopping, or as a thoughtful gift.</p>
                <div className="mb-4">
                  <Input type="file" onChange={handleImageUpload} accept="image/*" className="border-4 border-black" />
                </div>
                <Button onClick={() => setShowPreview(true)} disabled={!uploadedImage} className="w-full mb-4 bg-[#5FA5F9] hover:bg-[#4A94E8] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Get Preview
                </Button>
                <h2 className="text-2xl font-bold mb-2">Features</h2>
                <ul className="list-none mb-4">
                  <li className="flex items-center mb-2"><ShoppingBag className="mr-2" /> 100% Cotton</li>
                  <li className="flex items-center mb-2"><Recycle className="mr-2" /> Eco-friendly and durable</li>
                  <li className="flex items-center"><Truck className="mr-2" /> Free shipping on orders over $50</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-4 border-black mb-4">
                <AccordionTrigger className="font-bold p-4">How long does shipping take?</AccordionTrigger>
                <AccordionContent className="p-4">
                  Shipping typically takes 3-5 business days within the continental US.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-4 border-black mb-4">
                <AccordionTrigger className="font-bold p-4">Can I wash my tote bag?</AccordionTrigger>
                <AccordionContent className="p-4">
                  Yes, our tote bags are machine washable. We recommend washing in cold water and air drying for best results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-4 border-black">
                <AccordionTrigger className="font-bold p-4">What's the return policy?</AccordionTrigger>
                <AccordionContent className="p-4">
                  We offer a 30-day return policy for unused items in their original packaging. Custom printed bags cannot be returned unless there's a defect.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-4 border-black">
                <CardHeader>
                  <CardTitle>Great quality!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The tote bag is sturdy and the custom print looks amazing.</p>
                </CardContent>
                <CardFooter>
                  <p>⭐⭐⭐⭐⭐</p>
                </CardFooter>
              </Card>
              <Card className="border-4 border-black">
                <CardHeader>
                  <CardTitle>Love my new bag</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The customization process was easy and the result is perfect.</p>
                </CardContent>
                <CardFooter>
                  <p>⭐⭐⭐⭐⭐</p>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <Card className="border-4 border-black">
                    <CardHeader>
                      <CardTitle>Canvas Backpack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="/placeholder.svg" alt="Canvas Backpack" className="w-full h-48 object-cover" />
                    </CardContent>
                    <CardFooter>
                      <p>$39.99</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card className="border-4 border-black">
                    <CardHeader>
                      <CardTitle>Laptop Sleeve</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="/placeholder.svg" alt="Laptop Sleeve" className="w-full h-48 object-cover" />
                    </CardContent>
                    <CardFooter>
                      <p>$24.99</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card className="border-4 border-black">
                    <CardHeader>
                      <CardTitle>Drawstring Bag</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="/placeholder.svg" alt="Drawstring Bag" className="w-full h-48 object-cover" />
                    </CardContent>
                    <CardFooter>
                      <p>$19.99</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="border-8 border-black bg-white">
          <DialogHeader>
            <DialogTitle>Preview Your Custom Tote Bag</DialogTitle>
            <DialogDescription>Here's how your tote bag will look with your uploaded image:</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 bg-gray-200">
              <img src={uploadedImage} alt="Uploaded Preview" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 border-8 border-black pointer-events-none"></div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddToCart} className="w-full bg-[#16A349] hover:bg-[#138A3D] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Add to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPage;
