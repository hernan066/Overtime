import Link from "next/link";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { useForm } from "react-hook-form";
import shopApi from "../../api/shopApi";
import { isEmail } from "../../utils/validations";

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

  const onRegister = async ({ name, email, password }: Inputs) => {
    console.log(name, email, password);
    
    try {
      const { data } = await shopApi.post("/user/register", {
        name,
        email,
        password,
      });
      const { token, user } = data;
      console.log(token, user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShopLayout title={"Register Overtime"} pageDescription={""}>
      <div className="login__main">
        <div className="login__container">
          <h1>SIGN UP</h1>

          <p>Create an account for faster checkout.</p>
          
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
              <Link href="/auth/login" passHref>
                <a>Log in here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </ShopLayout>
  );
};

export default RegisterPage;
