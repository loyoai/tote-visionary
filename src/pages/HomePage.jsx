import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HomePage = () => {
  const bags = [
    { id: 1, name: "Classic Tote", price: 29.99, image: "/placeholder.svg" },
    { id: 2, name: "Beach Tote", price: 34.99, image: "/placeholder.svg" },
    { id: 3, name: "Eco Tote", price: 24.99, image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#FEF9C3] p-4 md:p-8">
      <div className="container mx-auto">
        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <div className="text-center py-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Custom Tote Bags</h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">Create your unique style with our customizable tote bags!</p>
              <Link to="/product">
                <Button className="text-xl px-8 py-4 bg-[#5FA5F9] text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow">
                  Customize Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Our Collection</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bags.map((bag) => (
                <Card key={bag.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CardHeader>
                    <CardTitle>{bag.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bag.image} alt={bag.name} className="w-full h-48 object-cover mb-4" />
                    <p className="text-xl font-bold">${bag.price}</p>
                    <Link to="/product">
                      <Button className="w-full mt-4 bg-[#16A349] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;