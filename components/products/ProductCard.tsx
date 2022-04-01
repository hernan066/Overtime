import Image from "next/image";
import { initialData } from "../../database/products";

export const ProductCard = () => {
  return (
    <div className="cards__container">
      {initialData.products.map((product) => (
        <div className="card__container" key={product.slug}>
          <div className="card__image-container">
             <div className="card__image-container-img1">
              <Image
                src={`/products/${product.images[0]}`}
                alt="img"
                width={380}
                height={380}
                layout="responsive"
                objectFit="cover"
              />
            </div> 
            <div className="card__image-container-img2">
              <Image
                src={`/products/${product.images[1]}`}
                alt="img"
                width={380}
                height={380}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="card__content">
            <div className="card__content-row1">
              <h3 className="card__title">{product.title}</h3>
              <p className="card__price">${product.price}</p>
            </div>
            <div className="card__content-row2">
              <p className="card__type">{product.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
