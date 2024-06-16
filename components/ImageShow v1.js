'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageSlideShow = ({ imagesData }) => {
  const CDNURL =
    'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';

  // const images = imagesData.map((image) => `${CDNURL}${image.name}`);
  const imgs = imagesData.map((img) => {
    let dispImages = {
      src: `${CDNURL}${img.name}`,
      alt: img.name,
    };

    return dispImages;
  });

  // console.log(imgs);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < imgs.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    // <div className='relative max-w-[2000px] w-full h-lvh overflow-hidden'>
    <div className='relative max-w-[2000px] w-full h-lvh'>
      <div className='w-full h-full object-cover absolute top-0 left-0 opacity-0 transform scale-110 translate-x-[-1rem] rotate-[-5deg] transition duration-1500 ease-in-out'>
        {imgs.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${
              index === currentImageIndex
                ? 'z-1 opacity-1 transform scale-100 rotate-0'
                : ''
            }
            `}
            width={1200}
            height={800}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideShow;
