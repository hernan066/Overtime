import { ShopLayout } from "../components/layout/ShopLayout";

const Page404 = () => {
  return (
    <ShopLayout title={"Page no found"} pageDescription={"Page no found"}>
      <div className="container__404">
        <div className="fof">
          <h1>Error 404</h1>
            
        </div>
      </div>
    </ShopLayout>
  );
};

export default Page404;
