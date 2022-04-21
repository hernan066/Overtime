import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import shopApi from "../../../api/shopApi";
import { ShopLayout } from "../../../components/layout/ShopLayout";
import { isEmail } from "../../../utils/validations";
import { NextPage } from "next";
import { countries } from "../../../utils/countries";

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
};

const getAddressFromCookies = (): FormData => {
  return {
    firstName: Cookies.get("firstName") || "",
    lastName: Cookies.get("lastName") || "",
    address: Cookies.get("address") || "",
    address2: Cookies.get("address2") || "",
    zip: Cookies.get("zip") || "",
    city: Cookies.get("city") || "",
    country: Cookies.get("country") || "",
    phone: Cookies.get("phone") || "",
  };
};

const AddressPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: getAddressFromCookies(),
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmitAddress = (data: FormData) => {
    //dispatch
    //router.push("/checkout/summary");
    console.log(data)
  };

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
                placeholder="Enter your Address 2 (optional)"
                {...register("address2")}
              />
              <span className="form-error">{errors.address2?.message}</span>
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
              <select  
              placeholder="Country/region"
              {...register("country")}
              >
                 {
                   countries.map((country) => (
                      <option key={country.code} value={country.code}>{country.name}</option>
                    ))
                 }

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
