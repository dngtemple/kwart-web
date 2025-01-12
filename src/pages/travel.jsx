import React from "react";
import Footer from "@/components/footer";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ResponsiveImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-lg ${image.size}`}
        >
          <img
            src={image.url}
            alt={image.alt || `Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

// Example usage
const TravelGallery = () => {
  const navigate = useNavigate();

  const images = [
    { url: "/assets/travel/p2.jpg", alt: "Placeholder 1", size: "col-span-2" },
    { url: "/assets/travel/p1 (1).jpg", alt: "Placeholder 2", size: "col-span-2" },
    { url: "/assets/travel/p3.jpg", alt: "Placeholder 3", size: "row-span-2" },
    { url: "/assets/travel/p4.jpg", alt: "Placeholder 4", size: "" },
    { url: "/assets/travel/p5.jpg", alt: "Placeholder 4", size: "" },
    { url: "/assets/travel/p6.jpg", alt: "Placeholder 5", size: "col-span-2 row-span-2" },
    { url: "/assets/travel/p7.jpg", alt: "Placeholder 6", size: "" },
    { url: "/assets/travel/p8.jpg", alt: "Placeholder 7", size: "row-span-2" },
    { url: "/assets/travel/p9.jpg", alt: "Placeholder 8", size: "row-span-2" },
    { url: "/assets/travel/p10.jpg", alt: "Placeholder 9", size: "col-span-2" },
    { url: "/assets/travel/p11.jpg", alt: "Placeholder 10", size: "" },
    { url: "/assets/travel/p12.jpg", alt: "Placeholder 11", size: "" },
    { url: "/assets/travel/p13.jpg", alt: "Placeholder 12", size: "row-span-2" },
    { url: "/assets/travel/p14.jpg", alt: "Placeholder 13", size: "" },
    { url: "/assets/travel/p15.jpg", alt: "Placeholder 14", size: "" },
    { url: "/assets/travel/p16.jpg", alt: "Placeholder 15", size: "col-span-2" },
    { url: "/assets/travel/p17.jpg", alt: "Placeholder 16", size: "" },
    { url: "/assets/travel/p18.jpg", alt: "Placeholder 17", size: "" },
    { url: "/assets/travel/p19.jpg", alt: "Placeholder 18", size: "row-span-2" },
    { url: "/assets/travel/p20.jpg", alt: "Placeholder 19", size: "" },
    { url: "/assets/travel/p21.jpg", alt: "Placeholder 20", size: "col-span-2" },
    { url: "/assets/travel/p22.jpg", alt: "Placeholder 21", size: "" },
    { url: "/assets/travel/p23.jpg", alt: "Placeholder 22", size: "" },
    { url: "/assets/travel/p24.jpg", alt: "Placeholder 23", size: "" },
    { url: "/assets/travel/p25.jpg", alt: "Placeholder 24", size: "col-span-2" },
    { url: "/assets/travel/p26.jpg", alt: "Placeholder 25", size: "" },
    { url: "/assets/travel/p27.jpg", alt: "Placeholder 26", size: "" },
    { url: "/assets/travel/p28.jpg", alt: "Placeholder 27", size: "col-span-2" },
  ];

  return (
    <div>
      <IoMdArrowBack className="text-white text-xl m-5" onClick={function(){
              navigate(-1);
            }} />
      <h1 className="text-center text-white text-2xl \ my-4 mt-10">Travel and Tourism </h1>
      <ResponsiveImageGrid images={images} />
      <Footer/>

    </div>
  );
};

export default TravelGallery;