import Link from "next/link";
import { ShopLayout } from "../../components/layout/ShopLayout";

const loginPage = () => {
  return (
    <ShopLayout title={""} pageDescription={""}>
      <div className="login__main">
        <div className="login__container">
          <h1>LOG IN</h1>
          <form>
            <div className="form-control">
              <input type="text" placeholder="Enter your email address" />
            </div>

            <div className="form-control">
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="btn">Login</button>
            <p className="text">
              Don&apos;t have an account? <a href="#">Register</a>
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

export default loginPage;
