import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Product from "../Products/Product";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
  const [products, setProducts] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [axiosPublic]);
  return (
    <div>
      <Banner />

      <div className=" px-20">
        {/* some products on home page */}
        <h1 className=" text-5xl text-center font-semibold my-10">On Sell</h1>
        <div className=" grid grid-cols-3 gap-10">
          {products?.slice(0, 4)?.map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </div>
        {/* show all button */}
        <div className=" flex justify-center pb-10">
          <Link to={"/products"}>
            <h1
              href="#"
              className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 transition duration-500 ease-out"
            >
              See All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
