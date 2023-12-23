import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Carousel } from "react-responsive-carousel";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Details = () => {
  const { id } = useParams();
  const { handleSubmit } = useForm();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [productDetails, setProductDetails] = useState();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosPublic.get(`/products/${id}`).then((res) => {
      setProductDetails(res.data);
    });
  }, [id, axiosPublic]);
  const colors = [
    { value: "Red", label: "Red" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "White", label: "White" },
  ];
  const sizes = [
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];
  const handelColor = (e) => {
    setColor(e.value);
  };
  const handelSize = (e) => {
    setSize(e.value);
  };
  console.log(color);

  const onSubmit = (data) => {
    const toastId = toast.loading("Adding....");
    data.size = size;
    data.color = color;
    data.name = productDetails?.name;
    data.price = productDetails?.price;
    data.image = productDetails?.image1;
    data.buyerEmail = user?.email;
    console.log(data);
    axiosPublic.post("/cart", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Product added to cart...", { id: toastId });
        navigate("/products");
      }
    });
  };

  return (
    <div>
      <div className=" py-5 lg:py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="sticky top-0 z-50 overflow-hidden "
              >
                {/*  */}
                <Carousel lg:width={350} dynamicHeight={false}>
                  <div>
                    <img src={productDetails?.image1} />
                  </div>
                  <div>
                    <img src={productDetails?.image2} />
                  </div>
                </Carousel>
              </div>
            </div>

            {/* details code */}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="w-full px-4 md:w-1/2 "
            >
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                    {productDetails?.name}
                  </h2>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {productDetails?.details}
                  </p>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>${productDetails?.price}</span>
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                    Available Color
                  </h2>
                  <div className="flex flex-wrap -mb-2">
                    <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                      <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                    </button>
                    <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                    </button>
                    <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    </button>
                    <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                    </button>
                  </div>
                </div>
                <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                  <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                    Available Size
                  </h2>
                  <div className="flex flex-wrap -mb-2">
                    {productDetails?.size?.map((x) => (
                      <button
                        key={x}
                        className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400"
                      >
                        <div className="w-6 h-6 bg-gray-200 rounded-full">
                          {x}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center ">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 transition duration-500 ease-out"
                    >
                      Add To Cart
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      {/* add to cart modal for confirmation */}
                      <dialog id="my_modal_2" className="modal ">
                        <div className="modal-box text-slate-800">
                          <dialog id="my_modal_3" className="modal ">
                            <div className="modal-box">
                              <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>
                                  Please confirm your hoodie Size and color{" "}
                                </h1>
                                <div className="grid grid-cols-2 gap-6 mt-4 min-h-48 ">
                                  <div>
                                    <label className="text-slate-800  text-sm md:text-lg font-medium ">
                                      Select Color
                                    </label>
                                    <Select
                                      onChange={handelColor}
                                      options={colors}
                                      className="mt-3"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label className="text-slate-800  text-sm md:text-lg font-medium ">
                                      Select Size
                                    </label>
                                    <Select
                                      onChange={handelSize}
                                      options={sizes}
                                      className="mt-3"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className=" flex justify-center">
                                  <button
                                    type="submit"
                                    className="text-white w-full bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-105 transition duration-500 ease-out"
                                  >
                                    Add
                                  </button>
                                </div>
                              </form>
                            </div>
                          </dialog>
                        </div>
                      </dialog>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
