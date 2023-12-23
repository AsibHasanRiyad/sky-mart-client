/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className="">
        <h1 className=" text-2xl font-bold text-slate-800 md:text-4xl text-center">What People Says About Us</h1>
      <div className=" flex text-[#000000] pt-2.5 text-sm font-medium">
        <Marquee pauseOnHover={false} className=" cursor-pointer gap-10">
          <div className="w-full mx-5 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Quality products
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            Absolutely love my new hoodie! The material is super soft and comfortable, and the fit is perfect. The color is true to the online images, and the overall quality is excellent. Shipping was fast, and the customer service was responsive when I had a question. Will definitely be shopping here again!
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Shakib
              </a>
            </div>
          </div>
          <div className="w-full mx-10 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://i.ibb.co/1R9bf33/user.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Value for money
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            Great hoodie for the price! The design is trendy, and I appreciate the attention to detail in the stitching. It's warm without being too heavy, making it perfect for fall weather. The only reason I didn't give it 5 stars is that the sizing runs slightly small, so I recommend ordering a size up for a more relaxed fit. Overall, a good purchase.
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Eshak Ahmed
              </a>
            </div>
          </div>
          <div className="w-full mx-5 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://i.ibb.co/mtxxTpV/9439727.jpg"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              I love this hoodie
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            The hoodie I ordered arrived quickly, and I was impressed with the packaging. The quality is top-notch, and it has become my go-to for casual outings. The only reason I'm not giving it 5 stars is that the color seemed a bit darker in person compared to the website photos. Nonetheless, I'm happy with my purchase and would consider buying from this store again
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Mritul
              </a>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Review;