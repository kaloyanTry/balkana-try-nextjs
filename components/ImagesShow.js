import { getMainImages } from '@/lib/actions';
import ImageSlideShow from './ImageShow';

async function ImagesShow() {
  const imagesData = await getMainImages();
  // console.log(imagesData);

  // const images = imagesData.map((imgName) => imgName.name);
  // console.log(images);

  //sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/1-mskali.jpg
  return (
    <div>
      <ImageSlideShow imagesData={imagesData} />
    </div>
  );
}

export default ImagesShow;
