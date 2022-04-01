import Image from "next/image";
import { initialData } from "../../database/products";

export const ProductCard = () => {
  

  return (
    
      <div className="cards__container">
        {initialData.products.map((product) => (
          <div className="card__container" key={product.slug}>
            <div className="card__image-container">
              <Image
                src={`/products/${product.images[0]}`}
                alt="img"
                 width={380}
                height={380} 
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    
  );
};
