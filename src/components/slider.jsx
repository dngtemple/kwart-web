import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";




export default function Slider() {
 
  const localImages = ["/p13.jpg", "/p9.jpg", "/p10.jpg", "/p11.jpg", "/p12.jpg"];

  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {localImages.map((imagePath, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative w-full  h-52 sm:h-96">
                  <img
                    src={imagePath}
                    alt={`Slide ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full" />
    </Carousel>
  );
}