import { getMainImages } from '@/lib/actions';
import ImageSlideShow from './ImageShow';

async function ImagesShow() {
  const imagesData = await getMainImages();

  return (
    <div>
      <ImageSlideShow imagesData={imagesData} />
    </div>
  );
}

export default ImagesShow;
