import Image from 'next/image';
import { lazy } from 'react';

export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
          Amplify Your Digital Presence: <br /> Your Success, Our Strategy.
        </h1>
        {/* Hero Subtitle */}
        {/* <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl">
          Streamline your digital journey and achieve your goals with ease.
        </p> */}
      </div>

      {/* Image Section */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/bann.png" // Replace with your image path
          alt="Hero Image"
          priority={true}
          width={800}
          height={500}
          className="object-cover w-auto h-auto"
        />
      </div>
    </div>
  );
}
