'use client';

import Image from 'next/image';

const ImageSlideShow = ({ images }) => {
  const CDNURL =
    'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <Image
            src={`${CDNURL}${image.name}`}
            width={1200}
            height={800}
            alt={image.name}
            priority
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageSlideShow;
// const ImageSlideShow = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const CDNURL =
//     'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === images.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? images.length - 1 : prevSlide - 1
//     );
//   };
//   console.log(images);

//   return (
//     <div className='relative w-full h-full overflow-hidden'>
//       <div className='absolute inset-0 z-10 flex justify-between items-center'>
//         <button
//           type='button'
//           onClick={handlePrev}
//           className='text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white p-3'
//         >
//           <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
//             <path
//               d='M15 8L8.5 12.5L15 17'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             />
//           </svg>
//         </button>
//         <button
//           type='button'
//           onClick={handleNext}
//           className='text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white p-3'
//         >
//           <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
//             <path
//               d='M9 5L15.5 8.5L9 12'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             />
//           </svg>
//         </button>
//       </div>
//       <div className='relative w-full h-full'>
//         {images.map((image, index) => (
//           <Image
//             width={800}
//             height={600}
//             key={index}
//             src={`${CDNURL}${image.name}`}
//             alt={image.alt || `Slide ${index + 1}`}
//             className={`absolute inset-0 object-cover h-full w-full opacity-0 transition-opacity duration-500 ease-in-out ${
//               currentSlide === index ? 'opacity-100 z-20' : ''
//             }`}
//             priority={true}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const CDNURL =
//   'https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/';
// console.log(images);

// return (
//   <ul>
//     {images.map((image) => (
//       <li key={image.id}>
//         <Image
//           src={`${CDNURL}${image.name}`}
//           width={600}
//           height={400}
//           alt={image.name}
//           priority='true'
//         />
//       </li>
//     ))}
//   </ul>
// );
