import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ShopLayout } from "../../../components/layout/ShopLayout";
import { NextPage } from "next";
import { countries } from "../../../utils/countries";
import { addAddress } from "../../../redux/cartSlice";

import { getAddressFromCookies } from "../../../utils/getAddressFromCookies";
import { shippingAddress } from "../../../interfaces/cart";

const AddressPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingAddress>({
    defaultValues: getAddressFromCookies(),
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmitAddress = (data: shippingAddress) => {
    Cookies.set("firstName", data.firstName);
    Cookies.set("lastName", data.lastName);
    Cookies.set("address", data.address);
    Cookies.set("zip", data.zip);
    Cookies.set("city", data.city);
    Cookies.set("country", data.country);
    Cookies.set("phone", data.phone);

    dispatch(addAddress(data));

    router.push("/checkout/summary");
  };

  //el useEffect que carga las cookies esta en layout
  //todo: agragar estos datos a la db y recuperalos de ahi

  return (
    <ShopLayout title={"Your address"} pageDescription={"Your address"}>
      <div className="checkout__address__container">
        <div className="checkout__steps">
          <Link href={"/checkout/cart"}>
            <a>
              <span style={{}}>Cart {"> "}</span>
            </a>
          </Link>

          <span style={{ color: "#ff6600" }}>Information {"> "}</span>
          <span style={{ color: "#bbb" }}>Shipping {"> "}</span>
          <span style={{ color: "#bbb" }}>Payment</span>
        </div>

        <h1 className="title">SHIPPING ADDRESS</h1>

        <div className="checkout__address__main">
          <form onSubmit={handleSubmit(onSubmitAddress)} noValidate>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your First Name"
                {...register("firstName", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.firstName?.message}</span>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your Last Name"
                {...register("lastName", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.lastName?.message}</span>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your Address"
                {...register("address", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.address?.message}</span>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your Zip code"
                {...register("zip", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.zip?.message}</span>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your City"
                {...register("city", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.city?.message}</span>
            </div>
            <div className="form-control">
              <select >
               

                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Is required!",
                })}
              />
              <span className="form-error">{errors.phone?.message}</span>
            </div>

            <button className="btn" type="submit">
              continue to shipping
            </button>
          </form>
        </div>
      </div>
    </ShopLayout>
  );
};

export default AddressPage;
