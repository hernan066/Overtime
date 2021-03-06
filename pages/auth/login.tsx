import Link from "next/link";
import { useForm } from "react-hook-form";
//import { useDispatch } from "react-redux";

import { ShopLayout } from "../../components/layout/ShopLayout";
import { isEmail } from "../../utils/validations";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getSession, signIn, getProviders } from "next-auth/react";
import { GetServerSideProps } from "next";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //const dispatch = useDispatch();
  const router = useRouter();

  const [error, setError] = useState(false);

  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    getProviders().then((prov) => {
      // console.log({prov});
      setProviders(prov);
    });
  }, []);

  const onLogin = async ({ email, password }: Inputs) => {
    /*  try {
      const { data } = await shopApi.post("/user/login", { email, password });
      const { token, user } = data;

      Cookies.set("token", token);
      dispatch(login(user));

      setError(false);

      // Todo: navegar a la pantalla que el usuario estaba
      const destination = router.query.p?.toString() || "/";
      router.replace(destination);
    } catch (error) {
      console.log(error);
      setError(true);
    } */

    await signIn("credentials", { email, password });
  };

  return (
    <ShopLayout title={"Login Overtime"} pageDescription={""}>
      <div className="login__main">
        <div className="login__container">
          <h1>LOG IN</h1>
          {error && (
            <span className="form-error">Email or password invalid!</span>
          )}

          <form onSubmit={handleSubmit(onLogin)} noValidate>
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

            <button className="btn" type="submit">
              Login
            </button>

          </form>
            <div className="form-social-network">
              <p>Or login with social networks</p>

              {Object.values(providers).map((provider: any) => {
                if (provider.id === "credentials")
                  return <div key="credentials"></div>;
                return (
                  <button
                    key={provider.id}
                    className="btn"
                    onClick={() => signIn(provider.id)}
                  >
                    {provider.name}
                  </button>
                );
              })}
            </div>

            <p className="text">
              Don&apos;t have an account?{" "}
              <Link
                href={
                  router.query.p
                    ? `/auth/register?p=${router.query.p}`
                    : "/auth/register"
                }
                passHref
              >
                <a>Register</a>
              </Link>
            </p>
            <Link
              href={
                router.query.p
                  ? `/auth/register?p=${router.query.p}`
                  : "/auth/register"
              }
              passHref
            >
              <a>Forgot your password?</a>
            </Link>
        </div>
      </div>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });
  // console.log({session});

  const { p = "/" } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
