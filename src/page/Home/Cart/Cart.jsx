import { useQuery } from "react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Cart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  console.log(cart);
  const total = cart.reduce((sum, cart) => sum + cart?.price, 0);
  console.log(total);
  return (
    <div className=" px-4 lg:px-20 mt-10">
      {/* cart */}
      <h2 className="text-xl font-semibold my-10">Your cart</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
        {cart?.map((item) => (
          <div key={item._id}>
            <div className="flex flex-col dark:bg-gray-900 dark:text-gray-100">
              <ul className="flex flex-col divide-y dark:divide-gray-700">
                <li className="flex flex-col py-2 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={item?.image}
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold sm:pr-8">
                            {item?.name}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            Color: {item?.color}
                          </p>
                          <p className="text-sm dark:text-gray-400">
                            Size: {item?.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            $ {item?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <hr />
      {/* total */}
      <div className="space-y-1 text-right mt-4">
        <p className="text-lg">
          Total amount:
          <span className="font-semibold text-emerald-700 ml-2">$ {total}</span>
        </p>
      </div>
      <div className=" flex justify-end my-4">
        <button
          href="#"
          className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center  hover:scale-110 transition duration-500 ease-out"
        >
          Check Out
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
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;
