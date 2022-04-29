import Link from "next/link";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { useForm } from "react-hook-form";
import shopApi from "../../api/shopApi";
import { isEmail } from "../../utils/validations";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";
import { login } from "../../redux/userSlice";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();
  const router = useRouter();

  const [error, setError] = useState<{ errorStatus: boolean; message: string }>(
    { errorStatus: false, message: "" }
  );

  const onRegister = async ({ name, email, password }: Inputs) => {
    try {
      const { data } = await shopApi.post("/user/register", {
        name,
        email,
        password,
      });
      const { token, user } = data;
      console.log(token, user);
      Cookies.set("token", token);
      dispatch(login(user));

      setError({ ...error, errorStatus: false });

      // Todo: navegar a la pantalla que el usuario estaba
      //const destination = router.query.p?.toString() || "/";
      //router.replace(destination);

      await signIn('credentials', {email, password});
    
    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError({ errorStatus: true, message: error.response?.data.message });
      } else {
        setError({ errorStatus: true, message: "Something went wrong" });
      }
    }
  };

  return (
    <ShopLayout title={"Register Overtime"} pageDescription={""}>
      <div className="login__main">
        <div className="login__container">
          <h1>SIGN UP</h1>

          <p>Create an account for faster checkout.</p>

          {error.errorStatus && (
            <span className="form-error">{error.message}</span>
          )}

          <form onSubmit={handleSubmit(onRegister)} noValidate>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Is required!",
                  minLength: { value: 2, message: "Min length is 2" },
                })}
              />
              <span className="form-error">{errors.name?.message}</span>
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Is required!",
                  validate: (value) => isEmail(value),
                })}
              />
              <span className="form-error">{errors.email?.message}</span>
            </div>

            <div className="form-control">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Is required!",
                  minLength: { value: 6, message: "Min length is 6" },
                })}
              />
              <span className="form-error">{errors.password?.message}</span>
            </div>
            {/* <div className="form-control">
              <input 
              type="password" 
              placeholder="Repeat your password" />
              
            </div> */}

            <button className="btn" type="submit">
              sign up
            </button>

            <p className="text">
              Already have an account?
              <Link
                href={
                  router.query.p
                    ? `/auth/login?p=${router.query.p}`
                    : "/auth/login"
                }
                passHref
              >
                <a>Log in here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const session = await getSession({ req });
  // console.log({session});

  const { p = '/' } = query;

  if ( session ) {
      return {
          redirect: {
              destination: p.toString(),
              permanent: false
          }
      }
  }


  return {
      props: { }
  }
}

export default RegisterPage;
