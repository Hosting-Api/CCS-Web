import Image from 'next/image';
import styles from './Slider.module.css';

const clients = [
  { name: 'Client 1', logo: '/LOGOS/1.png' },
  { name: 'Client 2', logo: '/LOGOS/2.png' },
  { name: 'Client 3', logo: '/LOGOS/3.png' },
  { name: 'Client 4', logo: '/LOGOS/4.png' },
  { name: 'Client 5', logo: '/LOGOS/5.png' },
  { name: 'Client 6', logo: '/LOGOS/6.png' },
  { name: 'Client 7', logo: '/LOGOS/7.png' },
  { name: 'Client 8', logo: '/LOGOS/8.png' },
  { name: 'Client 9', logo: '/LOGOS/9.png' },
  { name: 'Client 10', logo: '/LOGOS/10.png' },
  { name: 'Client 11', logo: '/LOGOS/11.png' },
  { name: 'Client 12', logo: '/LOGOS/12.png' },
  { name: 'Client 13', logo: '/LOGOS/13.png' },
  { name: 'Client 14', logo: '/LOGOS/14.png' },
];

export default function Slider() {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Our Clients</h2>
      <div className="relative overflow-hidden">
        <div className={`${styles.scroll} flex`}>
          {/* Display logos and duplicates for continuous loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <Image
                src={client.logo}
                alt={client.name}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
