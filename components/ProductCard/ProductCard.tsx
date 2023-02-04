import classNames from "classnames";
import React, { FC, useState } from "react";
import Button from "../Button";
import PriceTag from "../PriceTag";

import Product1 from "./images/1.png";

interface ProductCardProps {
  productImage: string;
  isSaleItem?: boolean;
  name: string;
  description: string;
  totalPrice: string;
  discountPrice?: string;
}

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const commonClassNames = "flex flex-col items-center";
  return (
    <div
      className={classNames(
        commonClassNames,
        "pt-20 pb-6 xs:w-full md:w-[322px] text-center"
      )}
    >
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={classNames(
          "relative flex w-full bg-light-gray h-[380px] items-center justify-center"
        )}
      >
        {props.isSaleItem && (
          <div className="absolute rounded-full left-4 -top-10 flex justify-center items-center h-[70px] w-[70px] bg-primary-blue">
            <h2 className="text-white">Sale</h2>
          </div>
        )}
        {/* <Image
              src="/images/logo.png"
              alt="logo"
              width="219"
              height="41"
              className="cursor-pointer"
        /> */}
        {hover && (
          <div className="flex w-full z-10 absolute bottom-0">
            <Button type="default">ADD TO CART</Button>
          </div>
        )}
        <img className="absolute bottom-4" src={Product1} />
      </div>

      <div className={classNames(commonClassNames)}>
        <h3 className="mt-6">{props.name}</h3>
        <h4 className="text-primary-blue mt-4">{props.description}</h4>
        <div className="flex">
          <div className="mt-6 w-[90px]">
            <PriceTag>{props.totalPrice}</PriceTag>
          </div>
          {props.discountPrice && (
            <div className="mt-6 w-[90px]">
              <PriceTag lineThrough={true}>{props.discountPrice}</PriceTag>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {};
export default ProductCard;
