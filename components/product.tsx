import { ProductType } from "../types";
import { useRouter } from "next/router";

const product = ({
  product: {
    _id,
    tag,
    model,
    image,
    price,
    size,
    color,
    status,
    created_at,
    updated_at,
  },
}: {
  product: ProductType;
}) => {
  const router = useRouter();

  const ProductClick = () => {
    router.push(`/${_id}`);
  };

  return (
    <>
      <div className="w-[300px] snap-start" data-aos="fade-left" onClick={ProductClick}>
        <div className="w-[300px] bg-gray-200 aspect-square   hover:product-shadow">
          <img src={model?.thumbnail} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="text-sm text-gray-700">
          {model?.title}
          {price}HKD
        </div>
      </div>
    </>
  );
};

export default product;
