import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";

const ProductPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

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
    // Add to cart logic here
    toast({
      title: "Added to cart",
      description: "Your customized tote bag has been added to the cart.",
    });
    setShowPreview(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-8 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
          <div className="mb-4">
            <Input type="file" onChange={handleImageUpload} accept="image/*" />
          </div>
          <Button onClick={() => setShowPreview(true)} disabled={!uploadedImage} className="w-full mb-4">
            Get Preview
          </Button>
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>100% Cotton</li>
            <li>Customizable design</li>
            <li>Durable and eco-friendly</li>
            <li>Perfect for everyday use</li>
          </ul>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full mt-8">
        <AccordionItem value="faq">
          <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <h3 className="font-bold">How long does shipping take?</h3>
              <p>Shipping typically takes 3-5 business days.</p>
              <h3 className="font-bold">Can I wash my tote bag?</h3>
              <p>Yes, our tote bags are machine washable. We recommend washing in cold water and air drying.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8">
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
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-4 border-black">
            <CardHeader>
              <CardTitle>Canvas Backpack</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Canvas Backpack" className="w-full h-auto" />
            </CardContent>
            <CardFooter>
              <p>$39.99</p>
            </CardFooter>
          </Card>
          <Card className="border-4 border-black">
            <CardHeader>
              <CardTitle>Laptop Sleeve</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Laptop Sleeve" className="w-full h-auto" />
            </CardContent>
            <CardFooter>
              <p>$24.99</p>
            </CardFooter>
          </Card>
          <Card className="border-4 border-black">
            <CardHeader>
              <CardTitle>Drawstring Bag</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Drawstring Bag" className="w-full h-auto" />
            </CardContent>
            <CardFooter>
              <p>$19.99</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="border-8 border-black">
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
            <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPage;