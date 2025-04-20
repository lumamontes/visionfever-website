'use client';

import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import styles from './styles.module.css';
import { zines } from '@/data/zines';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={styles.page} ref={ref} data-density="hard">
      <div className={styles.pageContent}>
        <Image
          src={props.image}
          alt={`Page ${props.number}`}
          fill
          style={{ objectFit: 'contain' }}
          priority={props.number <= 1} Only prioritize first couple of pages
          quality={85}
        />
      </div>
    </div>
  );
});
Page.displayName = 'Page';

export default function Preview({slug}: {
  slug: string
}) {

  const findZine = zines.find((zine) => zine.slug === slug)
  const book = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageImages, setPageImages] = useState([]);
  
  useEffect(() => {
    const images = Array.from({ length: findZine?.pageCount ?? 10 }, (_, i) => 
      `/images/zines/zine-${slug}/pages/${i + 1}.jpg`
    );
    console.log('images', images)
    setPageImages(images);
  }, []);
  
  const onPageFlip = (e) => {
    setCurrentPage(e.data);
  };
  
  const onInit = (e) => {
    if(findZine){
      setTotalPages(findZine.pageCount);
    }
  };
  
  return (
    <div className={styles.bookContainer}>
    <HTMLFlipBook
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      onFlip={onPageFlip}
      onInit={onInit}
      className={styles.flipBook}
      ref={book}
      >
        {pageImages.map((image, index) => (
          <Page key={index} number={index} image={image} />
        ))}
      </HTMLFlipBook>

      <div className={styles.controls}>
        <button 
          onClick={() => book.current.pageFlip().flipPrev()}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button 
          onClick={() => book.current.pageFlip().flipNext()}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// To handle SSR, you would use:
// export default dynamic(() => Promise.resolve(ImageFlipBook), { ssr: false });