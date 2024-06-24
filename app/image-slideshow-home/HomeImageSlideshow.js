'use client';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const HomeImageSlideshow = ({ imagesData }) => {
  // console.log(imagesData);
  const CDNURL =
    'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';

  // const images = imagesData.map((image) => `${CDNURL}${image.name}`);
  // console.log(images);
  const images = imagesData.map((img) => {
    let displayedImages = {
      url: `${CDNURL}${img.name}`,
      alt: img.name,
    };

    return displayedImages;
  });
  // console.log(images);

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className='ml-10 top-40 md:top-72'>
        <BsArrowLeftShort className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='mr-10 top-40 md:top-72'>
        <BsArrowRightShort className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
  };

  return (
    <div className='w-full h-screen'>
      <Zoom {...zoomInProperties}>
        {imagesData.map((each, index) => (
          <div
            key={index}
            className='flex justify-center md:items-center items-start w-screen h-screen relative'
          >
            <img className='w-screen' src={each} />
            <h1 className='absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white'>
              Hello, World
            </h1>
            <p className='absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white'>
              &apos;Everything you can imagine is real.&apos;
            </p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default HomeImageSlideshow;

// This App is using react-slideshow-image: https://react-slideshow-image.netlify.app/?path=/story/introduction--page
{
  /* <BsArrowLeftShort />; */
}
{
  /* <BsArrowRightShort />; */
}
