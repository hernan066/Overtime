import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const ProductPage = () => {
  const [showDetails, setShowDetails] = useState<Boolean>(true);
  const [showSizing, setShowSizing] = useState<Boolean>(false);

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="product__container">
        <div className="product__image">
          <div className="product__image-container">
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
        <div className="product__description">
          <div className="product__description-container">
            <h3>❤️‍🔥 BEST SELLER</h3>
            <h2>{product.title}</h2>
            <span className="product__description-price">${product.price}</span>
            <div className="product__description-promotion">
              <p>
                4 interest-free payments of $16.25 with <strong>Klarna</strong>.
              </p>
              <Link href="#" passHref>
                <a>Learn more</a>
              </Link>
            </div>
            <div className="product__description-size">
              <h6>Select a Size</h6>
              <div className="size">
                <button className="btn-size active">S</button>
                <button className="btn-size">M</button>
                <button className="btn-size">L</button>
                <button className="btn-size">XL</button>
                <button className="btn-size">XXL</button>
              </div>
            </div>
            <button className="btn">add to cart</button>

            <div className="product__details">
              <div className="details">
                <h3>Details</h3>
                <button
                  className="btn-details"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  {showDetails ? "-" : "+"}
                </button>
              </div>

              <div
                className={`details-content ${showDetails ? "" : "invisible"}`}
              >
                {" "}
                <p>{product.description}</p>{" "}
              </div>

              <div className={`sizing ${showSizing ? "" : "invisible"}`}>
                <h3>Sizing & fit</h3>{" "}
                <button
                  className="btn-details"
                  onClick={() => setShowSizing(!showSizing)}
                >
                  {showSizing ? "-" : "+"}
                </button>
              </div>
              <div
                className={`details-sizing ${showSizing ? "" : "invisible"}`}
              >
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td
                        colSpan={6}
                        style={{ width: "99.75%", verticalAlign: "top" }}
                      >
                        <strong>CARE: MACHINE WASH COLD &amp; AIR DRY</strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={6}
                        style={{ width: "99.8299%", verticalAlign: "top" }}
                      >
                        <strong>ADULT SIZES</strong> -{" "}
                        <strong>SIZING RUNS TRUE TO SIZE</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20.6633%", verticalAlign: "top" }}>
                        SIZE
                      </td>
                      <td style={{ width: "12.5%", textAlign: "center" }}>S</td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        M
                      </td>
                      <td style={{ width: "16.6666%", textAlign: "center" }}>
                        L
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        XL
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        XXL
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20.6633%", verticalAlign: "top" }}>
                        CHEST WIDTH
                      </td>
                      <td style={{ width: "12.5%", textAlign: "center" }}>
                        20&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        22&quot;
                      </td>
                      <td style={{ width: "16.6666%", textAlign: "center" }}>
                        24&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        26&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        28&quot;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20.6633%", verticalAlign: "top" }}>
                        BODY LENGTH
                      </td>
                      <td style={{ width: "12.5%", textAlign: "center" }}>
                        28&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        29&quot;
                      </td>
                      <td style={{ width: "16.6666%", textAlign: "center" }}>
                        30&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        31&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        32&quot;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20.6633%", verticalAlign: "top" }}>
                        SLEEVE LENGTH
                      </td>
                      <td style={{ width: "12.5%", textAlign: "center" }}>
                        24&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        24.5&quot;
                      </td>
                      <td style={{ width: "16.6666%", textAlign: "center" }}>
                        25&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        25.5&quot;
                      </td>
                      <td style={{ width: "16.6667%", textAlign: "center" }}>
                        26&quot;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
