import React from 'react';
import assets from '../assets/assets';

const ImageGrid = () => {
  return (
    <section className="bg-white mt-4 flex items-center justify-center md:mt-8 lg:mt-16">
      <div className="grid w-11/12 grid-cols-1 justify-items-center gap-2 md:w-11/12 md:grid-cols-2 md:gap-x-2 md:gap-y-6 lg:w-10/12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 xl:w-8/12 xl:gap-4">
        
        {/* Image 1 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid1} alt="Image 1" className="h-full w-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid2} alt="Image 2" className="h-full w-full object-cover" />
        </div>

        {/* Image 3 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid3} alt="Image 3" className="h-full w-full object-cover" />
        </div>

        {/* Image 4 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid4} alt="Image 4" className="h-full w-full object-cover" />
        </div>

        {/* Image 5 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid5} alt="Image 5" className="h-full w-full object-cover" />
        </div>

        {/* Image 6 */}
        <div className="h-full w-full md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
          <img src={assets.grid6} alt="Image 6" className="h-full w-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default ImageGrid;
