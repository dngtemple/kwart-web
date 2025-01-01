import React from "react";
import Footer from "@/components/footer";

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
const GraduationGallery = () => {
  const images = [
    { url: "p8.jpg", alt: "Placeholder 1", size: "" },
    { url: "p6.jpg", alt: "Placeholder 2", size: "col-span-2" },
    { url: "p10.jpg", alt: "Placeholder 3", size: "row-span-2" },
    { url: "p4.jpg", alt: "Placeholder 4", size: "" },
    { url: "p28.jpg", alt: "Placeholder 4", size: "" },
    { url: "p23.jpg", alt: "Placeholder 5", size: "col-span-2 row-span-2" },
    { url: "p2.jpg", alt: "Placeholder 6", size: "" },
    { url: "p5.jpg", alt: "Placeholder 7", size: "" },
    { url: "p12.jpg", alt: "Placeholder 8", size: "row-span-2" },
    { url: "p13.jpg", alt: "Placeholder 9", size: "col-span-2" },
    { url: "p20.jpg", alt: "Placeholder 10", size: "" },
    { url: "p11.jpg", alt: "Placeholder 11", size: "" },
    { url: "p19.jpg", alt: "Placeholder 12", size: "row-span-2" },
    { url: "p21.jpg", alt: "Placeholder 12", size: "" },
    { url: "p22.jpg", alt: "Placeholder 12", size: "" },
    { url: "p9.jpg", alt: "Placeholder 12", size: "col-span-2 " },
    { url: "p15.jpg", alt: "Placeholder 12", size: "" },
    { url: "p14.jpg", alt: "Placeholder 12", size: "row-span-2" },
    { url: "p18.jpg", alt: "Placeholder 12", size: "" },
    { url: "p27.jpg", alt: "Placeholder 12", size: "col-span-2" },
  ];

  return (
    <div>
      <h1 className="text-center text-white text-2xl \ my-4 mt-10">Graduation  Photography </h1>
      <ResponsiveImageGrid images={images} />
      <Footer/>

    </div>
  );
};

export default GraduationGallery;