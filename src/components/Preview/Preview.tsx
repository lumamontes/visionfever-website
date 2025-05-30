'use client';

import React, { useRef, useState, useEffect, ForwardedRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import styles from './styles.module.css';
import { zines } from '@/data/zines';

const Page = React.forwardRef<HTMLDivElement, { image: string; number: number }>((props, ref) => {
  return (
    <div className={styles.page} ref={ref as ForwardedRef<HTMLDivElement>} data-density="hard">
      <div className={styles.pageContent}>
        <Image
          src={props.image}
          className='object-contain w-full h-full'
          alt={`Page ${props.number}`}
          fill
          priority={props.number <= 1} 
          quality={85}
        />
      </div>
    </div>
  );
});
Page.displayName = 'Page';

export default function Preview({ slug }: { slug: string }) {
  const findZine = zines.find((zine) => zine.slug === slug);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const book = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageImages, setPageImages] = useState<string[]>([]);
  
  const aspectRatio = 2550 / 1650;
  const baseWidth = 550;
  const calculatedHeight = Math.round(baseWidth * aspectRatio);
  
  const [isMobile, setIsMobile] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(baseWidth);
  const [displayHeight, setDisplayHeight] = useState(calculatedHeight);
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        const mobileWidth = Math.min(window.innerWidth - 40, 400);
        setDisplayWidth(mobileWidth);
        setDisplayHeight(Math.round(mobileWidth * aspectRatio));
      } else {
        setDisplayWidth(baseWidth);
        setDisplayHeight(calculatedHeight);
      }
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [aspectRatio, baseWidth, calculatedHeight]);

  useEffect(() => {
    const images = Array.from({ length: findZine?.pageCount ?? 10 }, (_, i) =>
      `/images/zines/zine-${slug}/pages/${i + 1}.jpg`
    );
    setPageImages(images);
  }, [findZine, slug]);

  const onPageFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  const onInit = () => {
    if (findZine) {
      setTotalPages(findZine.pageCount);
    }
  };

  return (
    <div className={styles.bookContainer}>
      <HTMLFlipBook
          width={displayWidth}
          height={displayHeight}
          size="fixed"
          minWidth={200}
          maxWidth={1000}
          minHeight={300}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          style={{ backgroundColor: "#f8f8f8" }}
          onFlip={onPageFlip}
          onInit={onInit}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={isMobile}
          startZIndex={0}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          className={styles.flipBook}
          ref={book}
        >
        {pageImages.map((image, index) => (
          <Page key={index} number={index} image={image} />
        ))}
      </HTMLFlipBook>

      <div className={styles.controls}>
        <button
          onClick={() => book.current?.pageFlip().flipPrev()}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={() => book.current?.pageFlip().flipNext()}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}