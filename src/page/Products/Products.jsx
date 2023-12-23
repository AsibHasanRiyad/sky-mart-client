import { useEffect, useState } from "react";
import Product from "./Product";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Products = () => {
  const [products, setProducts] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [axiosPublic]);
  console.log(products);
  return (
    <div className=" px-4 md:px-8 lg:px-20 mb-10">
      <h1 className=" text-center text-5xl py-10 font-semibold">
        All Products
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {products?.map((product) => (
          <Product key={product.name} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
