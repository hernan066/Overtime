import Link from "next/link";
import { useForm } from "react-hook-form";
import shopApi from "../../api/shopApi";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { isEmail } from '../../utils/validations';

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

  

  const onLogin = async ({email, password}: Inputs) => {
    try {
     
      const { data } = await shopApi.post('/user/login', { email, password });
      const { token, user } = data;
      console.log(token, user);
    
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <ShopLayout title={"Login Overtime"} pageDescription={""}>
      <div className="login__main">
        <div className="login__container">
          <h1>LOG IN</h1>
          <form onSubmit={handleSubmit(onLogin)} noValidate>
            <div className="form-control">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Is required!",
                  validate: (value) => isEmail(value)

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
            <p className="text">
              Don&apos;t have an account? <Link href="/auth/register" passHref><a >Register</a></Link> 
            </p>
            <Link href="/auth/register" passHref>
              <a>Forgot your password?</a>
            </Link>
          </form>
        </div>
      </div>
    </ShopLayout>
  );
};

export default LoginPage;
