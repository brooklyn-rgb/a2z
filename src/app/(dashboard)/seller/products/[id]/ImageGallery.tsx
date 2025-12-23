import { ProductImage } from '@/types/product.types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function ImageGallery({ images }: { images: ProductImage[] }): JSX.Element {
  const [image, setImage] = useState<ProductImage>({
    isDefault: false,
    defaultImg: '',
    cardImg: '',
    displayImg: '',
    commentImg: '',
    smallImg: '',
    publicId: '',
  });

  useEffect(() => {
    const selectDefault = images.find(imgData => imgData.isDefault);
    setImage(selectDefault ?? image);
  }, [images]);

  const onSelectImage = (imageData: ProductImage) => {
    if (imageData.publicId === image.publicId) return;
    setImage(imageData);
  };

  // Helper function to get valid image source
  const getValidSrc = (src?: string): string => {
    return src || '/images/placeholder.png';
  };

  return (
    <div className="w-full max-w-[470px] p-2">
      <div className="relative w-full max-w-[450px] h-[450px]">
        <Image
          className="rounded-[8px]"
          fill
          src={getValidSrc(image.displayImg)}
          alt="product"
        />
      </div>

      <div className="h-[90px] w-full flex items-center space-x-4 justify-center">
        {images.map((imageData, index) => (
          <div
            key={imageData.publicId || `image-${index}`}
            onClick={() => onSelectImage(imageData)}
            className="relative cursor-pointer active:scale-95 duration-150 w-[64px] h-[64px] rounded-[8px] bg-primaryLight"
          >
            <Image
              className="rounded-[8px]"
              fill
              src={getValidSrc(imageData.commentImg)}
              alt={`product image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
