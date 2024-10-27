import Image from 'next/image';

const images = [
  '/meeting.jpg', // Replace with your image paths
  '/post.jpg', 
  '/photoshoot.jpg', 
  '/reel.jpg', 
  '/photoshoot.jpg', 
  
];

export default function Gallery() {
  return (
    <div className="py-12 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {images.map((image, index) => (
            <div key={index} className="relative group shadow-lg ">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <span className="text-white text-lg font-bold">View</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
