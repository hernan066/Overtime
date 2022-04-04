import { FC } from "react";
import { ISize } from "../../../interfaces/products";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const ProductSize: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <div className="product__description-size">
      <h6>Select a Size</h6>
      <div className="size">
        {sizes.map((size) => (
          <button
            key={size}
            className={`btn-size ${selectedSize === size ? "active" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
