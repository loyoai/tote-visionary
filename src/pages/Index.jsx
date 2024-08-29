import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-black">Custom Tote Bags</h1>
        <p className="text-2xl text-gray-800 mb-8">Create your unique style with our customizable tote bags!</p>
        <Link to="/product">
          <Button className="text-xl px-8 py-4 bg-yellow-400 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
