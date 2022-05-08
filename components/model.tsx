import { ModelType } from "types";
import { useRouter } from "next/router";
import { FC } from 'react';

type Props = {
  model: ModelType
};

const Model: FC<Props> = ({
  model: {
    id,
    title,
    price,
    thumbnail
  },
}) => {
  const router = useRouter();

  const ProductClick = () => {
    router.push(`/${id}`);
  };

  return (
    <>
      <div className="w-[300px] snap-start" data-aos="fade-left" onClick={ProductClick}>
        <div className="w-[300px] bg-gray-200 aspect-square   hover:product-shadow">
          <img src={thumbnail} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="text-sm text-gray-700">
          {title}
          {price}HKD
        </div>
      </div>
    </>
  );
};

export default Model;
