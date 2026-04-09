import React from "react";

const PromotionBanner: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Banner 1 - Large */}
      <div className="col-span-1 lg:col-span-2 relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-card">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDun76H8K_kKSNVjUY5MP7ceY4uqHg42YPEAjYkPW4hiPqm2BGle7EbMKjDd-E2jI3HEQzzA94QmAMzb4K6NJsQxzG1c0Aku3rFa2k-UMJ0WuFEJ2Dv1gTTGZq7O1qrTqZKBCABtJfQ3hUsRH77BgYFNzYInjZOI6OM5EjHJ6S988qzYLYEaCD65Zx473JJnWeKCbqHBiHdgH6w1A-wIsaFeJDNsnVVaiVqjQ7GcgiIVviRLCxJAM90KC6_Evc-2_7MrYC8isotGVhZ')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
          <span className="text-secondary font-bold text-sm mb-2 tracking-wider">
            WEEKEND DEAL
          </span>
          <h2 className="text-white text-3xl font-bold mb-2 max-w-[200px]">
            Fresh Fruit Collection
          </h2>
          <p className="text-gray-200 mb-6">Up to 30% Off</p>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner 2 - Medium */}
      <div className="col-span-1 relative h-64 rounded-xl overflow-hidden group cursor-pointer bg-orange-50 shadow-card">
        <div className="absolute right-0 bottom-0 w-32 h-32 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuGnzSC30NmPAPF5FrrMQJmE-s2-Jo2OUQrelSee3hGtpzDjKziWA9U_kckTqXu9LRgDpVbD_OOxnkngOyBOR9rtJdAhxETPh76rckzRHsrusEJIahuwJlL1GGAYS-8EGHOkEZ-pN6gh8joYMe-HaJ8YrZxgN9a_ucld8KIRyjFuQitNRUkAxckopbdENB9khJ3E7KT3D1wmI1GG1affLO-dxyb48VdGbwGpYQD1Inm8dvudBbgzqljly85PfyoSNoegdlPRd7WyYv')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              Daily Kitchen Essentials
            </h3>
            <p className="text-white/80 text-sm">Starting at $5</p>
          </div>
          <button className="bg-white text-text-main hover:bg-gray-100 px-4 py-2 rounded-lg font-bold text-xs self-start transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Banner 3 - Medium */}
      <div className="col-span-1 relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-card">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwKmXIq6o8lu7Od16PDyD7wyqzMaRVn3WBJlOhKEdFi0zfZZAgaGsehArQESfEh--UOs0o5AZzPGgE_I2SazAv7GDVllwyftYfZN-Pck9yKMNPiag7ZmpSlsyDz5GEc28-4LzSkfzhKNN370phNYJg1OjZn3bKekdaHhclI40cWiAuwN1MkejYdP69yzITgwRhBYONQOsZovaiSBd2tXfqX23v2iDTQopYqDI5ttM3GACPDo5DVY2uM5jcnhC65Z4HgoT3npSVu3pD')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 inline-block">
              HOT
            </span>
            <h3 className="text-white text-xl font-bold mb-1">
              Healthy Snacks
            </h3>
            <p className="text-white/80 text-sm">Get 20% Cashback</p>
          </div>
          <button className="bg-white text-text-main hover:bg-gray-100 px-4 py-2 rounded-lg font-bold text-xs self-start transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
