import React from 'react';
import '../styles/global.css'; // Make sure to import your global styles if needed
import sikkim from '../images/sikkim.jpg'
import kalang from '../images/kalangpong.jpeg'
import darj from '../images/darjeeling.jpg'
const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Locations</h1>
      <p className="text-lg mb-12">
        Discover the enchanting destinations of Sikkim, Darjeeling, and Kalimpong. Each place offers unique experiences, breathtaking views, and cultural richness. Explore the highlights of these beautiful locations below.
      </p>

      {/* Sikkim Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Sikkim</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
            <p>
              Sikkim, a hidden gem in the Himalayas, is known for its stunning landscapes, vibrant festivals, and serene monasteries. Explore the beautiful valleys, lush forests, and majestic mountains that make Sikkim a must-visit destination.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={sikkim} alt="Sikkim" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Darjeeling Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Darjeeling</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
            <p>
              Darjeeling, known as the "Queen of the Hills," offers panoramic views of the Kanchenjunga, charming tea estates, and the historic Darjeeling Himalayan Railway. Enjoy the cool climate and vibrant local culture in this picturesque hill station.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={darj} alt="Darjeeling" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Kalimpong Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Kalimpong</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
            <p>
              Kalimpong, with its serene ambiance and lush green surroundings, offers a peaceful retreat. Explore the local markets, visit ancient monasteries, and enjoy the breathtaking views of the Teesta River and the Eastern Himalayas.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={kalang} alt="Kalimpong" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
