'use client';
import { useState, useEffect } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const ImageSlideShow = ({ imagesData }) => {
  const CDNURL =
    'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';

  // const images = imagesData.map((image) => `${CDNURL}${image.name}`);
  // console.log(images);
  const images = imagesData.map((img) => {
    let dispImages = {
      url: `${CDNURL}${img.name}`,
      alt: img.name,
    };

    return dispImages;
  });
  // console.log(imgs);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(autoPlay);
  });

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Arrow = ({ direction, onClick }) => (
    <div
      className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2  text-gray-300 cursor-pointer'
      style={{ [direction]: '20px' }}
    >
      {direction === 'left' ? (
        <BsFillArrowLeftCircleFill onClick={onClick} size={25} />
      ) : (
        <BsFillArrowRightCircleFill onClick={onClick} size={25} />
      )}
    </div>
  );

  return (
    <div className='max-w-[2000px] max-h-[900px] w-full h-lvh m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover  duration-1500 ease-in-out'
      ></div>
      <Arrow direction='left' onClick={prevImage} />
      <Arrow direction='right' onClick={nextImage} />
    </div>
  );
};

export default ImageSlideShow;
