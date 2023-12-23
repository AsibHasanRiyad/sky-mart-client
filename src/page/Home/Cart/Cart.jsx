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
  return (
    <div>
      <h1 className=" text-4xl text-center my-10 text-slate-900 font-semibold">
        Added Products
      </h1>
      <div className="overflow-x-auto">
        <table
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="table text-xl"
        >
          {/* head */}
          <thead>
            <tr className=" bg-gray-200">
              <th></th>
              <th>Product Name</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.color}</td>
                  <td>{item?.size}</td>
                  <th>$ {item?.price}</th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className=" flex justify-center items-center my-10">
          <h1
            href="#"
            className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 transition duration-500 ease-out"
          >
            Make Payments
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
