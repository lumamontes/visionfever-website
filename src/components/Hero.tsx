'use client';

import Image from 'next/image';
import { heroDetails } from '@/data/hero';
import clsx from 'clsx';

const Hero: React.FC = () => {
    const gridPatternClass = "absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]";

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div 
                className="absolute left-0 top-0 bottom-0 -z-10 w-full"
            >
                <div className={gridPatternClass}></div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent ">
            </div>

            <div className="text-center">
                <Image
                    src={heroDetails.centerImageSrc}
                    width={484}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 484px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className={`relative mt-12 md:mt-16 mx-auto z-10`}
                />
                <p className={`mt-4 text-foreground text-2xl max-w-lg mx-auto`}>{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <a href={'#'}>
                    <button
                            type="button"
                            className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-background bg-foreground": true, "text-foreground bg-background border border-foreground": !true })}
                        >
                        <div className="-mt-1 font-sans text-xl font-semibold">
                            Explore
                        </div>
                        </button>
                    </a>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10 invisible'
                />
            </div>
        </section>
    );
};

export default Hero;