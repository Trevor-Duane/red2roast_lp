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
            High in the Rwenzori Mountains, our farmer-led initiative perfects a premium Arabica single-origin. We guarantee the precise, complex flavor of this unique terroir through verifiable, constant investment.
        </p>
        <p className="text-base font-light mt-2">
            The first harvest lots are extremely limited.
        </p>
      </div>
    </section>
  );
};

export default RwenzoriMountains;
