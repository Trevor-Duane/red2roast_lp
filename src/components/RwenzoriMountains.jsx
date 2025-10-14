import React from 'react';

const RwenzoriMountains = () => {
  return (
    <section className="relative mt-[280px] flex flex-col items-center justify-center gap-6 py-8 md:mt-[350px] lg:mt-[400px]">
      
      {/* Video Frame */}
      <div className="aspect-video w-11/12 min-w-3xl overflow-hidden border-8 border-[#01632b] md:w-11/12 lg:w-10/12 xl:w-8/12">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/zNDoMBDDyAE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description Section */}
      <div className="w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <h6 className="text-lg font-semibold">Rwenzori Mountains</h6>
        <p className="text-base font-light">
          Sourced from the legendary Mountains of the Moon in Uganda, where altitude and climate create the perfect growing conditions. Direct trade partnerships with local farmers ensure fair compensation and sustainable farming practices. Hand-picked at peak ripeness, each bean is carefully selected to ensure only the finest quality reaches your cup.
        </p>
      </div>
    </section>
  );
};

export default RwenzoriMountains;
