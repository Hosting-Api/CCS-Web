import Image from 'next/image';

const services = [
  {
    title: 'Posts',
    description: 'We provide premium quality posters / flyers for Instagram / Whatsapp to promote your business.',
    image: '/post.jpg', // Replace with your image path
  },
  {
    title: 'Reels',
    description: 'Our team has experienced reels creators who would create excellent reels for you.',
    image: '/reel.jpg', // Replace with your image path
  },
  {
    title: 'Account Management',
    description: 'We can manage your social media accounts with regular posting of content as demanded by our clients.',
    image: '/account.jpg', // Replace with your image path
  },
  {
    title: 'Photoshoot & Videography',
    description: 'We have experienced photographers and videographers who would capture excellent photos and videos for your business.',
    image: '/photoshoot.jpg', // Replace with your image path
  },
  {
    title: 'Website Development',
    description: 'We can develop you excellent websites for further growth of your business across the globe.',
    image: '/website.jpg', // Replace with your image path
  },
  {
    title: 'Growth Planning & Strategy',
    description: 'We would help you in planning and strategizing the the further steps for the growth of your business.',
    image: '/meeting.jpg', // Replace with your image path
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          We offer the following Services
        </h2>
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
                  className="object-contain" // Ensures the entire image is visible without cropping
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center"><b>{service.title}</b></h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
  );
}
