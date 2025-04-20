import React from 'react';
import { BiSquareRounded } from 'react-icons/bi';

const mediums = [
  "traditional",
  "digital",
  "animation",
  "photography",
  "videography",
  "MUA",
   "music",
   "literature",
   "fashion"
];

const MediumsSlider: React.FC = () => {
    return (
        <section
            id="mediums-slider"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(24,25,27,0.5)] to-[rgba(20,21,23,0.5)]">
            </div>

            <div className="text-center">
              {mediums.map(((medium, index) => {
                return (
                  <section>
                    {medium}
                    {index < mediums.length && (
                      <div>
                        <BiSquareRounded className='w-5 h-5 text-secondary' />
                      </div>
                    )}
                  </section>
                )
              }))}
            </div>
        </section>
    );
};

export default MediumsSlider;
