import Link from "next/link";
import { ShopLayout } from "../../components/layout/ShopLayout";

const registerPage = () => {
  return (
    <ShopLayout title={""} pageDescription={""}>
      <div className="login__main">
      <div className="login__container">
        <h1>SIGN UP</h1>

        <p>Create an account for faster checkout.</p>
        <form>
            <div className="form-control">
                <input type="text" placeholder="Enter your email address"/>
                
            </div>

            <div className="form-control">
                <input type="password" placeholder="Enter your password" />
                
            </div>
            <div className="form-control">
                <input type="password" placeholder="Repeat your password" />
                
            </div>

            <button className="btn">sign up</button>
            
            
            <p className="text">Already have an account? 
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

export default registerPage;
