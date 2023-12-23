import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Carousel } from "react-responsive-carousel";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Details = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [color, setColor] = useState();
  const [productDetails, setProductDetails] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/products/${id}`).then((res) => {
      setProductDetails(res.data);
    });
  }, [id, axiosPublic]);
  const options = [
    { value: "Low", label: "low" },
    { value: "Moderate", label: "moderate" },
    { value: "High", label: "high" },
  ];
  const handelChange = (e) => {
    setColor(e.value);
  };
  console.log(color);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className=" py-5 lg:py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                {/*  */}
                <Carousel width={350} dynamicHeight={false}>
                  <div>
                    <img src={productDetails?.image1} />
                  </div>
                  <div>
                    <img src={productDetails?.image2} />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
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
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box text-slate-800">
                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-3 gap-6 mt-4 ">
                                  <div className="col-span-3 md:col-span-1">
                                    <label className="text-gray-100 text-base md:text-lg font-medium ">
                                      Title
                                    </label>
                                    <input
                                      type="text"
                                      {...register("title", { required: true })}
                                      className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                  </div>
                                  <div className=" col-span-2 md:col-span-1">
                                    <label className="text-gray-100 text-base md:text-lg font-medium ">
                                      Deadline
                                    </label>
                                    <input
                                      type="date"
                                      {...register("deadline", {
                                        required: true,
                                      })}
                                      className="block w-full min-h-10 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-100  text-sm md:text-lg font-medium ">
                                      Priority
                                    </label>
                                    <Select
                                      onChange={handelChange}
                                      options={options}
                                      className="mt-3"
                                    />
                                  </div>
                                </div>
                                <div className=" flex justify-between items-end gap-5">
                                  <div className=" mt-6 flex-1">
                                    <label className="text-gray-100 text-base md:text-lg font-medium ">
                                      Post Description
                                    </label>
                                    <textarea
                                      type="text"
                                      {...register("postDescription", {
                                        required: true,
                                      })}
                                      className="block w-full h-16 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                  </div>
                                  <div className="flex justify-end mt-6">
                                    <button
                                      type="submit"
                                      className="px-8 py-2.5 leading-5 text-[#FF7594] text-xl transition-colors duration-300 transform h-16 bg-white rounded-md hover:bg-gray-200"
                                    >
                                      Add
                                    </button>
                                  </div>
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
