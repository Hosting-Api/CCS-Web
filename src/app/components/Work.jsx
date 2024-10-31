import Image from 'next/image'; 

const services = [
  {
    title: 'Dairyland',
    url: 'https://www.instagram.com/dairyland_navsari/', // Replace with your actual URL
    image: '/w1.png', // Replace with your image path
  },
  {
    title: 'Aroma Health & Wellness',
    url: 'https://www.instagram.com/aromahealthandwellness/', // Replace with your actual URL
    image: '/w2.png', // Replace with your image path
  },
  {
    title: 'The Natural Kitchen',
    url: 'https://www.instagram.com/the_natural_kitchen_restro/', // Replace with your actual URL
    image: '/w3.png', // Replace with your image path
  },
  
];

export default function Work() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        Check Out our Work
        </h2>
        <p className='mt-2 text-gray-600 text-center text-2xl'>We have worked with many clients and below are some of our work. </p>
        {/* Adjusted gap to 3 (small gap between cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={250} // Adjusted width
                  height={250} // Adjusted height
                  className="object-contain w-auto h-auto" // Ensures the entire image is visible without cropping
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center"><b>{service.title}</b></h3>
              <div className="mt-2 text-center">
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-orange-300 transition"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
